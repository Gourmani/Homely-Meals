function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const meal = document.getElementById("meal").value;
  const date = document.getElementById("date").value;

  const message =
`Hello,
I want to pre-book a meal.

Name: ${name}
Phone: ${phone}
Meal: ${meal}
Date: ${date}`;

  const url =
"https://wa.me/916204078481?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
