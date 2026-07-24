// Replace this address with the email address where quote requests should be sent.
const BUSINESS_EMAIL = "quotes@reliablehandymanco.com";

const form = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

function clean(value) {
  return String(value || "").trim();
}

function valueOf(data, key, fallback = "Not provided") {
  return clean(data.get(key)) || fallback;
}

function getSelectedServices(formElement) {
  return [...formElement.querySelectorAll('input[name="services"]:checked')]
    .map((input) => input.value);
}

function buildEmailBody(data, services) {
  return [
    "NEW HANDYMAN QUOTE REQUEST",
    "==========================",
    "",
    "CONTACT INFORMATION",
    `Name: ${valueOf(data, "fullName")}`,
    `Email: ${valueOf(data, "email")}`,
    `Phone: ${valueOf(data, "phone")}`,
    `Preferred contact method: ${valueOf(data, "contactMethod")}`,
    "",
    "PROJECT LOCATION",
    `Address: ${valueOf(data, "street")}`,
    `City/State/ZIP: ${valueOf(data, "city")}, ${valueOf(data, "state")} ${valueOf(data, "zip")}`,
    `Property type: ${valueOf(data, "propertyType")}`,
    "",
    "PROJECT DETAILS",
    `Project title: ${valueOf(data, "projectTitle")}`,
    `Requested services: ${services.length ? services.join(", ") : "Not selected"}`,
    `Number of separate tasks: ${valueOf(data, "taskCount")}`,
    `Items already purchased: ${valueOf(data, "materials")}`,    "",
    "Project description:",
    valueOf(data, "description"),
    "",
    "Photo links:",
    valueOf(data, "photoLinks"),
    "",
    "TIMING AND ACCESS",
    `Desired timeframe: ${valueOf(data, "timeframe")}`,
    `Specific date: ${valueOf(data, "specificDate")}`,
    `Best days: ${valueOf(data, "bestDays")}`,
    `Best time of day: ${valueOf(data, "bestTime")}`,
    `Someone available onsite: ${valueOf(data, "onsite")}`,
    `Access/parking notes: ${valueOf(data, "access")}`,
    "",
    "BUDGET AND OTHER INFORMATION",
    `Approximate budget: ${valueOf(data, "budget")}`,
    `Referral source: ${valueOf(data, "referral")}`,
    "",
    "Additional notes:",
    valueOf(data, "notes"),
    "",
    "Please contact me to discuss the project, scheduling, and next steps.",
    "",
    `Submitted by: ${valueOf(data, "fullName")}`
  ].join("\n");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.hidden = true;

  const data = new FormData(form);
  const services = getSelectedServices(form);

  if (!services.length) {
    formMessage.textContent = "Please select at least one type of work.";
    formMessage.hidden = false;
    formMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const projectTitle = valueOf(data, "projectTitle", "Handyman Project");
  const customerName = valueOf(data, "fullName", "Prospective Customer");
  const subject = `Quote Request: ${projectTitle} — ${customerName}`;
  const body = buildEmailBody(data, services);

  const mailtoUrl =
    `mailto:${encodeURIComponent(BUSINESS_EMAIL)}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});
