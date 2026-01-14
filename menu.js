// Category tab switch
function showCategory(category) {
  document.querySelectorAll('.category').forEach(section => {
    section.classList.add('hidden');
  });

  document.getElementById(category).classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // find clicked tab safely
  const activeTab = Array.from(document.querySelectorAll('.tab'))
    .find(tab => tab.textContent.toLowerCase() === category);

  if (activeTab) activeTab.classList.add('active');
}





// WhatsApp order from menu
const WHATSAPP_NUMBER = "916204078481";

function orderWhatsApp(itemName) {
  const message = `Hello 👋
I want to order:

${itemName}

Delivery Location: Darbhanga
Please confirm availability.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
