const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you for contacting Amrita Wellness!");

    form.reset();
  });
}