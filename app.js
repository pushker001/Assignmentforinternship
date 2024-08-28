document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const resultsList = document.getElementById('results-list');
    const selectedProductSection = document.getElementById('selected-product');
    const productName = document.getElementById('product-name');
    const productImage = document.getElementById('product-image');
    const fallbackText = document.getElementById('fallback-text');

    const clothingItems = [
      { name: 'Blue Jeans', image: 'https://freakins.com/cdn/shop/files/Aniwarya01525-Edit_54ec0cce-3005-4ec8-abfb-c6781cb95cad.jpg?v=1718094249' },
      { name: 'Black Hoodie', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAsBzsz_Rvbd6ztjIOn4hLaRlDkwc0EdK3Q&s' },
      { name: 'White Sneakers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJZiqloVfndZyJPwI_PPfwkZf4yhd8_PP2g&s' },
      { name: 'Green Jacket', image: 'https://oliveplanet.in/cdn/shop/files/tactical_softshell_jacket_olive_green_with_shoulder_flap_name_tab_1280x.jpg?v=1702017307' },
      { name: 'Yellow Shirt', image: 'https://www.snitch.co.in/cdn/shop/files/4MSS1947-04-M39.jpg?v=1685171732' },
      { name: 'Pink Scarf', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/30112023img/410409074002_2.jpg' },
      { name: 'Orange Hat', image: 'https://m.media-amazon.com/images/I/81cyKZSZI9L._AC_UY1100_.jpg' },
    ];

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();

      if (query.length > 3) {
        const filteredItems = clothingItems.filter(item =>
          item.name.toLowerCase().includes(query)
        );

        displayResults(filteredItems);
      } else {
        clearResults();
      }
    });

    function displayResults(items) {
      clearResults();

      if (items.length > 0) {
        searchResults.classList.remove('hidden');

        items.forEach(item => {
          const li = document.createElement('li');
          li.className = 'flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer';
          li.addEventListener('click', () => displaySelectedProduct(item));

          const img = document.createElement('img');
          img.src = item.image;
          img.alt = item.name;
          img.className = 'w-10 h-10 object-cover mr-4';

          const name = document.createElement('span');
          name.textContent = item.name;

          li.appendChild(img);
          li.appendChild(name);
          resultsList.appendChild(li);
        });
      }
    }

    function clearResults() {
      searchResults.classList.add('hidden');
      resultsList.innerHTML = '';
    }

    function displaySelectedProduct(item) {
      selectedProductSection.classList.remove('hidden');
      productName.textContent = item.name;
      productImage.src = item.image;
      productImage.alt = item.name;
      productImage.classList.remove('hidden');
      fallbackText.classList.add('hidden');

      productImage.onerror = () => {
        fallbackText.classList.remove('hidden');
        productImage.classList.add('hidden');
      };

      productImage.onload = () => {
        fallbackText.classList.add('hidden');
        productImage.classList.remove('hidden');
      };

      clearResults();
    }
});
