# Mayur Sonkusare — Animated Portfolio (Node.js + Express + EJS)

## What this is
A one-page animated portfolio implemented with Node.js (Express) and EJS templates.
Animations use GSAP (loaded from CDN). Styling uses Tailwind via CDN for simplicity.

## Features
- Animated hero and sections (GSAP)
- Contact form that sends email using Nodemailer (Gmail)
- Resume available in `/public/resume/Mayur_Sonkusare.pdf`

## Quick start
1. Unzip and cd into the project:
```bash
cd mayur_portfolio_node
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root with the following keys:
```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=mayursonkusare011@gmail.com
PORT=3000
```
> Note: Use an App Password if you have 2FA enabled on your Google account.

4. Start the server:
```bash
npm start
```

5. Open `http://localhost:3000` in your browser.

## Notes
- Tailwind is included via CDN to avoid a build step. If you want a Tailwind build pipeline instead, I can provide that.
- Make sure your Gmail account allows Nodemailer (use App Passwords or relax security settings carefully).
