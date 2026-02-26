let cart = 0;

const buttons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cartCount");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
  });
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
popoverTriggerList.forEach(el => new bootstrap.Popover(el));