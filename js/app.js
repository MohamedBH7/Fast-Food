function getTotalOrderQuantity() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const count = getTotalOrderQuantity();
  const cartCountElem = document.getElementById('cart-count');
  if (cartCountElem) {
    cartCountElem.textContent = count;
  }
}

// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', updateCartCount);
