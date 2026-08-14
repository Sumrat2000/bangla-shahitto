// সাধারণ ব্যানার ডট ইন্ডিকেটর (আপাতত ১ স্লাইড, পরে একাধিক কার্ড যোগ করা যাবে)
document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot');
  let active = 0;
  setInterval(() => {
    dots[active].classList.remove('active');
    active = (active + 1) % dots.length;
    dots[active].classList.add('active');
  }, 3500);
});
