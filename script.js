document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih, pesan Anda sudah terkirim!");
    this.reset();
  });
