// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
  
    searchButton.addEventListener('click', () => {
      alert(`Buscando: ${searchInput.value}`);
    });
  });
  