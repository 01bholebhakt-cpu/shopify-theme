document.addEventListener('DOMContentLoaded', () => {
  // AJax Add to Cart
  const productForm = document.querySelector('form[action="/cart/add"]');
  if (productForm) {
    productForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      let formData = new FormData(productForm);
      
      await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });
      
      openCartDrawer();
    });
  }

  // Cart Drawer Logic
  function openCartDrawer() {
    document.querySelector('.cart-drawer').classList.add('active');
  }

  // Lazy Loading for Images
  const images = document.querySelectorAll('img[loading="lazy"]');
  // Built-in browser support handles this, but we can add fade-in effects
  images.forEach(img => {
    img.addEventListener('load', () => img.style.opacity = 1);
  });
});
