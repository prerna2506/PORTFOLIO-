import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string; // Parsed HTML content
  readTime: string;
  date: string;
  tags: string[];
};

const BLOGS_DIR = path.join(process.cwd(), "content/blog");

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { metadata: {} as Record<string, any>, content: fileContent };
  }

  const [, yamlStr, bodyContent] = match;
  const metadata: Record<string, any> = {};

  yamlStr.split("\n").forEach((line) => {
    const parts = line.split(":");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join(":").trim().replace(/^['"]|['"]$/g, "");
      if (key === "tags") {
        metadata[key] = val
          .replace(/[\[\]]/g, "")
          .split(",")
          .map((t) => t.trim().replace(/^['"]|['"]$/g, ""));
      } else {
        metadata[key] = val;
      }
    }
  });

  return { metadata, content: bodyContent };
}

function parseMarkdownToHtml(mdText: string): string {
  let html = mdText.trim();

  // 1. Code blocks: ```javascript ... ```
  html = html.replace(/```(\w*)\n([\s\S]*?)\n```/g, (_, lang, code) => {
    return `<pre class="bg-white/[0.02] border border-white/[0.08] p-5 rounded-2xl overflow-x-auto my-6"><code class="text-neutral-200 text-sm font-mono block">${escapeHtml(code.trim())}</code></pre>`;
  });

  // 2. Inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code class="bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded text-orange-300 text-sm">$1</code>');

  // 3. Headings: ### title
  html = html.replace(/^###\s+(.+)$/gm, '<h3 class="text-xl font-bold tracking-tight text-white mt-8 mb-3">$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2 class="text-2xl font-bold tracking-tight text-white mt-10 mb-4">$1</h2>');

  // 4. Bold text: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-orange-300 font-semibold">$1</strong>');

  // 5. Lists: - item
  html = html.replace(/^\s*-\s+(.+)$/gm, '<li class="text-neutral-300">$1</li>');

  // Wrap consecutive <li> items in <ul>
  html = html.replace(/((?:<li[^>]*>[\s\S]*?<\/li>\s*)+)/g, '<ul class="list-disc pl-6 mb-5 space-y-2">$1</ul>');

  // 6. Paragraphs (split by double newline, skip elements that are already tags)
  const blocks = html.split(/\n\s*\n/);
  html = blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<li")
      ) {
        return trimmed;
      }
      return `<p class="text-neutral-300 leading-relaxed text-base sm:text-lg mb-5">${trimmed}</p>`;
    })
    .join("\n");

  return html;
}

// =====================================================================
// FILESYSTEM SYNCHRONOUS EXPORTS
// =====================================================================

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(BLOGS_DIR)) return [];

    const files = fs.readdirSync(BLOGS_DIR);
    const posts: BlogPost[] = [];

    files.forEach((file) => {
      if (path.extname(file) !== ".md") return;

      const filePath = path.join(BLOGS_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { metadata, content } = parseFrontmatter(fileContent);
      const slug = path.basename(file, ".md");

      posts.push({
        slug,
        title: metadata.title || "Untitled Post",
        category: metadata.category || "General",
        summary: metadata.summary || "",
        content: parseMarkdownToHtml(content),
        readTime: metadata.readTime || "5 min read",
        date: metadata.date || "May 2026",
        tags: metadata.tags || [],
      });
    });

    // Sort chronologically (newest dates first)
    return posts.sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOGS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { metadata, content } = parseFrontmatter(fileContent);

    return {
      slug,
      title: metadata.title || "Untitled Post",
      category: metadata.category || "General",
      summary: metadata.summary || "",
      content: parseMarkdownToHtml(content),
      readTime: metadata.readTime || "5 min read",
      date: metadata.date || "May 2026",
      tags: metadata.tags || [],
    };
  } catch (error) {
    console.error(`Error reading post with slug ${slug}:`, error);
    return null;
  }
}
