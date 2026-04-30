# 🚀 Premium Multi-Step Contact Form & Cinematic Portfolio

✨ Built to feel like a real product, not just a form.

A modern, full-stack cinematic portfolio with a **Typeform-like experience**, smooth animations, and real backend integration. Designed to showcase **UI/UX + full-stack skills**.

---

## 🔗 Live Demo

👉 **Live Site:** [https://portfolio-phi-seven-ba7rxhbca6.vercel.app/](https://portfolio-phi-seven-ba7rxhbca6.vercel.app/)
👉 **GitHub Repo:** [https://github.com/prerna2506/PORTFOLIO-](https://github.com/prerna2506/PORTFOLIO-)

---

## 📸 Screenshots

### 🧩 Multi-Step Form UI
![Form UI](/screenshots/form-ui.png)

### ✅ Success Screen
![Success Screen](/screenshots/success.png)

### 📊 Admin Dashboard
![Admin Dashboard](/screenshots/admin.png)

> 📌 **Tip:** Add your real screenshots inside the `public/screenshots` folder! Name them exactly `form-ui.png`, `success.png`, and `admin.png`.

---

## ✨ Features

* 🧠 **Multi-step form** (Typeform-style UX)
* 🎨 **Premium glassmorphism dark UI**
* ⚡ **Smooth animations & transitions**
* 📩 **Email notifications** (to you)
* ✉️ **Auto-reply email** to user (with Smart AI Context)
* 🗄️ **Supabase database integration**
* 📊 **Admin dashboard** to view analytics and submissions
* 🔐 **Secure Login** (Supabase Auth)
* 🚫 **Spam protection** (Math CAPTCHA)
* ✅ **Real-time success feedback** (no alert popups)

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Backend:** Next.js API Routes
* **Database & Auth:** Supabase
* **Email Service:** Resend

---

## 📂 Project Structure

```
/src/app
  /api/contact/route.ts   → Backend API (email + DB)
  /admin/page.tsx         → Admin dashboard
  /login/page.tsx         → Secure login portal
  /form/page.tsx          → Main form UI
  /page.tsx               → Main cinematic portfolio

/src/lib
  supabase.ts             → Supabase client

/public
  /screenshots            → Project images
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
```

---

## 🚀 Getting Started

```bash
# Clone repo
git clone https://github.com/prerna2506/PORTFOLIO-.git

# Install dependencies
npm install

# Run project
npm run dev
```

---

## 🧪 How It Works

1. User experiences the cinematic scrollytelling portfolio
2. User clicks "Get in touch" and fills multi-step form
3. Must solve Math CAPTCHA to prove humanity
4. Data is securely sent to backend API
5. Data is stored in Supabase bypassing RLS
6. Notification Email is sent to admin via Resend
7. Context-aware auto-reply email is sent to user
8. Inline success message is shown

---

## 🔐 Admin Dashboard

Access the hidden dashboard:

```
/login → /admin
```

View all submissions stored in the database, view high-value budgets ($50k+), and analyze recent activity.

---

## ⚠️ Security Note

* Do NOT expose `SUPABASE_SERVICE_ROLE_KEY` or `RESEND_API_KEY` in frontend!
* Keep `.env.local` completely private.
* Remember to add your Vercel URL to your Supabase Auth Redirect URLs.

---

## 📈 Future Improvements (Implemented!)

* ✅ Authentication for admin dashboard
* ✅ Analytics (form submissions tracking)
* ✅ Spam protection (CAPTCHA)
* ✅ AI-based auto replies

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📬 Contact

If you like this project or want to collaborate:

👉 Connect via the contact form in the app 😄

---

## ⭐ Show Your Support

If you found this helpful, give it a ⭐ on GitHub!
