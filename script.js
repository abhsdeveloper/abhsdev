const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "×" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("mobile-open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.textContent = "☰";
}));

const budget = document.getElementById("budget");
const display = document.getElementById("budgetDisplay");
const service = document.getElementById("service");
const formMessage = document.getElementById("formMessage");
const emailLink = document.getElementById("emailLink");
const WHATSAPP = "917995422457";
const EMAIL = "abhsdeveloper@gmail.com";

budget.addEventListener("input", () => {
  display.textContent = budget.value ? "₹" + Number(budget.value).toLocaleString("en-IN") : "Not set";
});

service.addEventListener("change", () => {
    budget.placeholder = "Example: 5000";
  }
);

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("orderForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const selectedService = service.value;
  const amount = budget.value ? "₹" + Number(budget.value).toLocaleString("en-IN") : "Not specified";
  const date = document.getElementById("date").value || "Not specified";
  const details = document.getElementById("details").value.trim();

  const message = `Hi Abhsdev! 👋\n\nI'd like to enquire about a project.\n\nName: ${name}\nEmail: ${email}\nMy WhatsApp/Phone: ${phone}\nService: ${selectedService}\nBudget: ${amount}\nPreferred delivery date: ${date}\n\nProject details:\n${details}\n\nSent through the Abhsdev website.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  const subject = encodeURIComponent(`Abhsdev Project Enquiry — ${selectedService}`);
  const mailBody = encodeURIComponent(message);
  emailLink.href = `mailto:${EMAIL}?subject=${subject}&body=${mailBody}`;

  formMessage.textContent = "Your enquiry is ready. WhatsApp should open with the details filled in — just press Send to contact Abhsdev.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
