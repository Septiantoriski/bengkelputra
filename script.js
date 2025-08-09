document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih, pesan Anda sudah terkirim!");
    this.reset();
  });

const jarakInput = document.getElementById("jarak");
if (jarakInput) {
  jarakInput.addEventListener("input", function () {
    const jarak = parseFloat(this.value) || 0;
    const biaya = jarak * 10000;
    document.getElementById("biaya-perjalanan").textContent =
      `Biaya perjalanan: Rp${biaya.toLocaleString("id-ID")}`;
  });
}

const serviceForm = document.getElementById("service-form");
if (serviceForm) {
  serviceForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Permintaan servis telah dikirim! Kami akan segera menghubungi Anda.");
    this.reset();
    document.getElementById("biaya-perjalanan").textContent =
      "Biaya perjalanan: Rp0";
  });
}

// Smooth scroll untuk navigasi anchor
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
