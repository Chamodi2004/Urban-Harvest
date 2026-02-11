import "./style.css";

document.addEventListener("DOMContentLoaded", () => {

  // ===== MOBILE MENU =====
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // ===== DARK MODE =====
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const html = document.documentElement;

  if (themeToggle && themeIcon) {
    const savedTheme = localStorage.getItem("theme");

    // Set initial theme
    if (savedTheme === "dark") {
      html.classList.add("dark");
      themeIcon.setAttribute("name", "sunny-outline");
    } else {
      html.classList.remove("dark");
      themeIcon.setAttribute("name", "moon-outline");
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
      const isDark = html.classList.toggle("dark");
      themeIcon.setAttribute("name", isDark ? "sunny-outline" : "moon-outline");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // ===== SIGNUP FORM VALIDATION =====
  const signupForm = document.getElementById("signupForm");
  const successMessage = document.getElementById("successMessage");

  if (signupForm && successMessage) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      // Get all input values
      const fullName = signupForm
        .querySelector('input[type="text"]')
        .value.trim();
      const email = signupForm
        .querySelector('input[type="email"]')
        .value.trim();
      const phone = signupForm
        .querySelector('input[type="tel"]')
        .value.trim();
      const password = signupForm
        .querySelector('input[type="password"]')
        .value.trim();
      const confirmPassword = signupForm
        .querySelectorAll('input[type="password"]')[1]
        .value.trim();

      // Check if any field is empty
      if (!fullName || !email || !phone || !password || !confirmPassword) {
        alert("Please fill in all fields!");
        return;
      }

      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Show success message
      alert("Sign-up successful! 🎉");
      successMessage.classList.remove("hidden");

      // Reset the form
      signupForm.reset();
    });
  }
});
