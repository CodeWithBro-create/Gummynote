document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-input');
            const productCards = document.querySelectorAll('.product-card');
            const noResultsMessage = document.getElementById('no-results');

            searchInput.addEventListener('input', (event) => {
                const searchTerm = event.target.value.toLowerCase();
                let productsFound = 0;

                productCards.forEach(card => {
                    const title = card.dataset.title.toLowerCase();
                    
                    if (title.includes(searchTerm)) {
                        card.style.display = 'block';
                        productsFound++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (productsFound === 0) {
                    noResultsMessage.style.display = 'block';
                } else {
                    noResultsMessage.style.display = 'none';
                }
            });
        });