# Wizard Trader 7 — Frontend

Pure React + Vite. No backend. No database. Direct nGenius payment redirect.

## Setup

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → dist/ (deploy to Vercel)
```

---

## ⚙️ 4 Things to Update Before Launch

All in one file: `src/config.js`

### 1. Post-Payment Links  (shown on /success)
```js
export const POST_PAYMENT = {
  helpline:      '+91 98765 43210',           // your helpline number (display)
  helplineTel:   '+919876543210',             // same, no spaces (for tel: link)
  whatsapp:      '919876543210',              // country code + number, no +
  whatsappGroup: 'https://chat.whatsapp.com/YOUR_GROUP_LINK',
  telegram:      'https://t.me/YOUR_GROUP',
}
```

### 2. Courses
Edit or add to the `COURSES` array. Each course has its own `paymentUrl`.

### 3. Trader Photo
In `TRADER.photo`, set the path:
```js
photo: '/src/assets/trader.jpg'
```
Then drop your photo in `src/assets/`.

### 4. nGenius Dashboard
Set your **Return URL** in the nGenius merchant portal to:
```
https://yourdomain.com/success
```
This is what redirects students to the /success page after payment.

---

## Payment Flow
```
Click "Enroll Now"
  → window.location.href → nGenius PayPage
      → Student pays in any currency (INR, AED, USD...)
          → nGenius redirects → /success
              → Student sees: Telegram link + WhatsApp group + Helpline
                  → Student joins groups and shares payment screenshot
```

## Deploy to Vercel
1. Push to GitHub
2. Import repo on vercel.com
3. Build command: `npm run build`
4. Output dir: `dist`
5. Done — auto-deploys on every push
