export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string; // HTML-safe markdown text representation
  readTime: string;
  date: string;
  tags: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "react-state-closure-debugging",
    title: "Why My React State Wasn't Updating: A Debugging Story",
    category: "Debugging",
    summary: "A deep dive into how standard JavaScript closures cause 'stale state' bugs in React event handlers, and how to resolve them using functional updates and refs.",
    content: `
<p>If you've spent any significant time building applications in React, you've likely run into a situation where a state value inside a <code>useEffect</code> hook or event listener simply refuses to update. It stays locked in its initial state, defying all logic. This is the notorious <strong>Stale Closure bug</strong>.</p>

<h3>The Broken Code</h3>
<p>Here is a common scenario: you are setting up an event listener (like a keyboard listener) to keep track of a user action, and you want to append data to an array state whenever a key is pressed.</p>

<pre><code>const [keys, setKeys] = useState([]);

useEffect(() => {
  const handleKeyDown = (e) => {
    // BUG: keys is always [] here!
    setKeys([...keys, e.key]);
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []); // Empty dependency array</code></pre>

<h3>Why did this happen?</h3>
<p>When the <code>useEffect</code> runs for the first time, it registers the <code>handleKeyDown</code> function. At that exact moment in time, the value of <code>keys</code> is its initial value: <code>[]</code>. Because of how JavaScript closures work, the <code>handleKeyDown</code> function permanently closes over the variables available at the time of its creation.</p>
<p>Even though the component re-renders and React creates a new state array, the event listener is still running the <em>original</em> function created during the first mount, which is still pointing to the stale, empty <code>[]</code> keys array. Every keystroke will simply overwrite the state to <code>[key]</code> instead of accumulating them.</p>

<h3>The Solution: Functional Updates</h3>
<p>Instead of referencing the state variable directly inside your state setter, you should pass a **functional update callback** to the state setter. React guarantees that the parameter passed to this callback is always the **most current, fresh state**:</p>

<pre><code>useEffect(() => {
  const handleKeyDown = (e) => {
    // FIX: prevKeys always holds the fresh state
    setKeys(prevKeys => [...prevKeys, e.key]);
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);</code></pre>

<p>By using <code>prevKeys =&gt; [...prevKeys, e.key]</code>, we completely bypass the closure scope issue. The event listener function still has a stale closure over <code>keys</code>, but we no longer read <code>keys</code> directly, letting React resolve the correct previous array state inside its queue.</p>
    `,
    readTime: "6 min read",
    date: "May 2026",
    tags: ["React Hooks", "Closures", "State Batching"]
  },
  {
    slug: "api-shielding-middleware-throttling",
    title: "API Shielding: Wrote Token-Bucket Rate Throttling Middleware",
    category: "Backend Security",
    summary: "Implementing a low-latency token-bucket rate limiter inside Next.js serverless edge middleware to block automated contact form spam without standard Redis dependencies.",
    content: `
<p>Open contact forms are a prime target for automated spambots. If left unguarded, spambots can flood your database, exhaust API limits (like Resend or SendGrid), and create significant resource overhead. To solve this, I designed a low-latency **Token-Bucket rate limiter** implemented directly at the Next.js API Middleware layer.</p>

<h3>Choosing the Algorithm: Token Bucket</h3>
<p>Unlike simple fixed-window rate limiters that cause massive traffic spikes at boundary resets, the **Token-Bucket algorithm** allows for bursts of traffic while enforcing a strict long-term average rate. The bucket holds a maximum number of tokens, which are consumed with each incoming request and refilled at a constant rate over time.</p>

<h3>Custom In-Memory Edge Middleware</h3>
<p>While third-party services like Redis are excellent for distributed state, they introduce a network trip (15ms-50ms) for every single request. For a portfolio, I engineered a highly optimized in-memory cache directly in the API runner. Here is the core structural flow:</p>

<pre><code>// Simple Token Bucket implementation
class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.refillRate = refillRate; // tokens per millisecond
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  allowRequest() {
    const now = Date.now();
    const elapsed = now - this.lastRefill;
    
    // Refill tokens based on elapsed time
    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillRate);
    this.lastRefill = now;

    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }
    return false;
  }
}</code></pre>

<h3>Key Security Measures Combined</h3>
<p>To ensure robust shielding, I combined the rate-limiting middleware with database protection layers:</p>
<ul>
  <li><strong>IP Hashing</strong>: Client IP addresses are hashed using SHA-256 before storage to protect user privacy while uniquely identifying bad actors.</li>
  <li><strong>Supabase Row-Level Security (RLS)</strong>: Configured strict table policies so that anonymous users can only insert records (not read or delete them), while only my authenticated account has read access.</li>
  <li><strong>Honeypot Fields</strong>: Added hidden inputs in the forms that are invisible to humans but filled by spambots, instantly blocking requests before the database is ever hit.</li>
</ul>
    `,
    readTime: "5 min read",
    date: "April 2026",
    tags: ["NextJS Middleware", "Token Bucket", "Supabase RLS"]
  },
  {
    slug: "achieving-60fps-canvas-rendering-intersectionobservers",
    title: "Achieving 60FPS: Canvas Offscreen Frames and IntersectionObservers",
    category: "Performance",
    summary: "How I boosted continuous scrolling from a sluggish 35fps to a locked 60fps by offloading heavy custom canvas drawings to offscreen animation loops and observers.",
    content: `
<p>Visual scrolling effects and custom dynamic backgrounds look premium—until they cause massive layout stuttering. Scrolling triggers continuous, synchronous repaints. If a scroll callback executes heavy calculations on the main thread, the browser will drop frames, dragging your FPS down into the thirties.</p>

<h3>The Problem: Main-Thread Scroll Bottlenecks</h3>
<p>When drawing animated particles, grid lines, or scroll-driven vectors, developers frequently listen to the scroll event directly:</p>

<pre><code>window.addEventListener('scroll', () => {
  // BUG: Heavy canvas recalculations trigger layout thrashing!
  drawCanvasElements(window.scrollY);
});</code></pre>

<p>Because the scroll event fires up to 100 times per second, the browser is forced to compute and repaint faster than the refresh rate, blocking main thread operations and causing lag.</p>

<h3>Step 1: The IntersectionObserver Solution</h3>
<p>Why compute animations when the section isn't even visible? By wrapping the Canvas inside an <code>IntersectionObserver</code>, we can completely stop calculations and freeze animation frames whenever the component scrolls out of view:</p>

<pre><code>const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the animation loop
      requestAnimationFrame(loop);
    } else {
      // Pause calculation loop
      cancelAnimationFrame(animationFrameId);
    }
  });
});
observer.observe(canvasContainerRef.current);</code></pre>

<h3>Step 2: Debouncing & RequestAnimationFrame Batching</h3>
<p>Instead of drawing inside the scroll callback, we should simply capture the scroll position, and delegate the drawing to a hardware-accelerated **<code>requestAnimationFrame</code>** loop. This aligns your render cycles precisely with the browser's GPU paint refresh cycle (60Hz or 120Hz):</p>

<pre><code>let currentScrollY = 0;
let lastRenderedScrollY = 0;

window.addEventListener('scroll', () => {
  currentScrollY = window.scrollY; // Fast read
}, { passive: true }); // passive flag optimization

function renderLoop() {
  if (currentScrollY !== lastRenderedScrollY) {
    drawCanvasElements(currentScrollY); // Draw ONLY when scroll changed
    lastRenderedScrollY = currentScrollY;
  }
  requestAnimationFrame(renderLoop);
}</code></pre>

<p>This decoupling completely resolves layout thrashing and keeps main-thread scrolling locked at a smooth, fluid 60FPS across all devices.</p>
    `,
    readTime: "8 min read",
    date: "March 2026",
    tags: ["requestAnimationFrame", "IntersectionObserver", "Canvas API"]
  }
];
