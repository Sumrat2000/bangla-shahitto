# বাংলা সাহিত্য অ্যাপ — APK বিল্ড গাইড (Termux + GitHub Actions)

## Termux-এ যা করতে হবে

```bash
pkg update && pkg upgrade -y
pkg install git nodejs -y
```

এই পুরো ফোল্ডারটা (এই `bangla-sahitya-app` folder) Termux-এ নিয়ে যাও, তারপর একটা GitHub রিপো বানাও এবং push করো:

```bash
cd bangla-sahitya-app
git init
git remote add origin https://github.com/<তোমার-ইউজারনেম>/bangla-sahitya-app.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

## এরপর

1. GitHub-এ তোমার repo খুলো → **Actions** ট্যাব দেখবে
2. "Build APK" workflow নিজে থেকেই চলবে (কয়েক মিনিট লাগবে)
3. রান শেষ হলে নিচে **Artifacts** সেকশনে `app-debug-apk` পাবে — ডাউনলোড করে ফোনে ইনস্টল করো

## নোট
- `read.html`, `mcq.html`, `profile.html` — এই ফাইলগুলো `timeline.html`-এ লিঙ্ক করা আছে কিন্তু তুমি আপলোড করোনি। ওগুলো না থাকলে ওই বাটনগুলোতে ক্লিক করলে 404 দেখাবে। থাকলে `www/` ফোল্ডারে বসিয়ে দিও।
- `index.html` আমি একটা সাধারণ redirect হিসেবে বানিয়ে দিয়েছি (সরাসরি `timeline.html`-এ নিয়ে যায়) — তোমার নিজের হোমপেজ থাকলে সেটা দিয়ে replace করো।
- App আইকন/স্প্ল্যাশ স্ক্রিন কাস্টমাইজ করতে চাইলে `npx cap add android` চালানোর পর `android/app/src/main/res/` ফোল্ডারে icon বসাতে হবে।
- প্রথমবার এটা debug APK (আনসাইনড, টেস্টের জন্য)। Play Store-এ দিতে চাইলে signed release APK লাগবে — বলো, সেটাও দেখিয়ে দেব।
