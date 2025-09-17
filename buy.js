// Initialize EmailJS
emailjs.init("sPrAzL76zQ6Lp9Rqp");

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    alert("Paveikslas nerastas! Patikrinkite URL.");
    return;
  }

  const painting = paintings.find(p => p.id === id);

  if (!painting) {
    alert("Paveikslas su šiuo ID neegzistuoja!");
    return;
  }

  // Set painting info on page
  document.getElementById("painting-title").innerText = painting.title;
  document.getElementById("painting-id").innerText = painting.id;
  document.getElementById("buy-img").src = painting.thumb || painting.src;

  // Form submission
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const templateParams = {
      buyer_name: document.getElementById('buyer-name').value,
      buyer_email: document.getElementById('buyer-email').value,
      painting_id: painting.id,
      painting_title: painting.title,
      painting_img: painting.thumb || painting.src,
      consent: document.getElementById('consent').checked ? "Taip" : "Ne"
    };

    emailjs.send('service_l242rda', 'template_1e90zn8', templateParams)
      .then(() => {
        alert('Jūsų žinutė sėkmingai išsiųsta!');
        form.reset();
      })
      .catch((err) => {
        console.error('Nepavyko išsiųsti žinutės:', err);
        alert('Oi! Įvyko klaida.');
      });
  });
});
