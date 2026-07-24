# Handyman Business Website Starter

This package contains a responsive two-page website:

- `index.html` — welcome page with service list, process, and calls to action
- `quote.html` — detailed quote request form
- `styles.css` — all visual styling
- `site.js` — mobile navigation and copyright year
- `quote.js` — validates the quote form and drafts a structured email

## First changes to make

1. Replace `Reliable Handyman Co.` with your business name.
2. Replace the phone number, email address, and service area.
3. In `quote.js`, change:

   `const BUSINESS_EMAIL = "quotes@reliablehandymanco.com";`

4. Edit the service list so it matches the work you offer and local licensing rules.
5. Add your real logo, photos, insurance language, and customer reviews.

## How the quote form works

The form uses a `mailto:` link. When the customer presses **Draft My Quote Email**:

1. The browser opens the customer’s default email application.
2. The recipient, subject, and organized message body are filled in.
3. The customer reviews the email, attaches photos if desired, and sends it.

This approach requires no hosting backend, but it depends on the customer having
an email application configured.

## Recommended production upgrade

For a more reliable customer experience, connect the form to one of these:

- Formspree
- Netlify Forms
- Web3Forms
- EmailJS
- A custom serverless function using Resend, Postmark, or SendGrid

A backend form service can send the email directly, show a success page, reduce
spam, save leads to a database, and support file uploads.

## Local preview

Open `index.html` directly in a browser, or run a local web server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Hosting options

This static site can be deployed to:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel
- Any standard web host
