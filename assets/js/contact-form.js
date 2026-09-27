document.querySelectorAll("form[data-contact-form]").forEach((form) => {
  const status = form.querySelector(".form-message");
  const button = form.querySelector("[type=submit]");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const payload = Object.fromEntries(new FormData(form).entries());
    payload.page = location.pathname;

    button.disabled = true;
    status.className = "form-message";
    status.textContent = "Sending...";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Sorry, your message could not be sent.");
      status.classList.add("success");
      status.textContent = data.message;
      form.reset();
    } catch (err) {
      status.classList.add("error");
      status.textContent = err.message;
    } finally {
      button.disabled = false;
    }
  });
});
