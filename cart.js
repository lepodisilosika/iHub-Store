 <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Load cart items from localStorage
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const cartContent = document.getElementById('cart-content');
            
            // Clear existing content
            cartContent.innerHTML = '';
            
            let subtotal = 0;
            
            if (cartItems.length === 0) {
                cartContent.innerHTML = '<p>Your cart is empty.</p>';
                document.getElementById('subtotal').textContent = 'BWP 0.00';
                document.getElementById('total').textContent = 'BWP 100.00';
                return;
            }
            
            // Generate cart items
            cartItems.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                
                // Get product details based on product name
                const productDetails = getProductDetails(item.name);
                
                subtotal += productDetails.price;
                
                cartItem.innerHTML = `
                    <img src="${productDetails.image}" alt="${item.name}">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <div class="item-price">BWP ${productDetails.price.toLocaleString()}</div>
                        
                        <div class="item-options">
                            <div class="option-group">
                                <h4>Color</h4>
                                <div class="options-row" id="color-options-${index}">
                                    ${productDetails.colors.map(color => `
                                        <button class="option-btn ${color === productDetails.selectedColor ? 'selected' : ''}" 
                                                data-index="${index}" 
                                                data-type="color" 
                                                data-value="${color}">
                                            ${color}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="option-group">
                                <h4>Storage</h4>
                                <div class="options-row" id="storage-options-${index}">
                                    ${productDetails.storageOptions.map(option => `
                                        <button class="option-btn ${option === productDetails.selectedStorage ? 'selected' : ''}" 
                                                data-index="${index}" 
                                                data-type="storage" 
                                                data-value="${option}">
                                            ${option}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="item-actions">
                            <button class="remove-btn" data-index="${index}">Remove</button>
                        </div>
                    </div>
                `;
                
                cartContent.appendChild(cartItem);
            });
            
            // Update totals
            document.getElementById('subtotal').textContent = `BWP ${subtotal.toLocaleString()}`;
            document.getElementById('total').textContent = `BWP ${(subtotal + 100).toLocaleString()}`;
            
            // Add event listeners for option buttons
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = this.dataset.index;
                    const type = this.dataset.type;
                    const value = this.dataset.value;
                    
                    // Update selected option
                    document.querySelectorAll(`#${type}-options-${index} .option-btn`).forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    this.classList.add('selected');
                    
                    // Update in cart items (you would save this to localStorage in a real implementation)
                });
            });
            
            // Add event listeners for remove buttons
            document.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = this.dataset.index;
                    cartItems.splice(index, 1);
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    location.reload(); // Refresh to show updated cart
                });
            });
        });
        
        function getProductDetails(productName) {
            // This would be replaced with actual product data from your database in a real implementation
            // For demo purposes, we're using a simplified version
            
const productDatabase = {
    'iPhone 16 Pro Max': {
        image: 'images/iPhone 16 pro max.jpg',
        price: 15999,
        colors: ['Space Black', 'White', 'Gold', 'Blue'],
        selectedColor: 'Space Black',
        storageOptions: ['128GB', '256GB', '512GB', '1TB'],
        selectedStorage: '128GB'
    },
    'iPhone 16 Pro': {
        image: 'images/iPhone 16 pro.jpg',
        price: 14499,
        colors: ['Space Black', 'White', 'Gold', 'Blue'],
        selectedColor: 'Space Black',
        storageOptions: ['128GB', '256GB', '512GB', '1TB'],
        selectedStorage: '128GB'
    },
    'iPhone 16e': {
        image: 'images/iPhone 16e.jpg',
        price: 13499,
        colors: ['Black', 'White', 'Blue', 'Red'],
        selectedColor: 'Black',
        storageOptions: ['128GB', '256GB', '512GB'],
        selectedStorage: '128GB'
    },
    'iPhone 15 Pro Max': {
        image: 'images/iPhone 15 pro max.jpg',
        price: 14499,
        colors: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'],
        selectedColor: 'Black Titanium',
        storageOptions: ['128GB', '256GB', '512GB', '1TB'],
        selectedStorage: '128GB'
    },
    'iPhone 15 Pro': {
        image: 'images/iPhone 15 pro.jpeg',
        price: 12999,
        colors: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'],
        selectedColor: 'Black Titanium',
        storageOptions: ['128GB', '256GB', '512GB', '1TB'],
        selectedStorage: '128GB'
    },
    'iPhone 15': {
        image: 'images/iPhone 15.jpg',
        price: 10999,
        colors: ['Blue', 'Pink', 'Green', 'Yellow', 'Black'],
        selectedColor: 'Blue',
        storageOptions: ['128GB', '256GB', '512GB'],
        selectedStorage: '128GB'
    },
    'iPhone 14 Pro Max': {
        image: 'images/iPhone 14 pro max.jpg',
        price: 11999,
        colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
        selectedColor: 'Deep Purple',
        storageOptions: ['128GB', '256GB', '512GB', '1TB'],
        selectedStorage: '128GB'
    },
    'iPhone 14 Pro': {
        image: 'images/iPhone 14 pro.jpg',
        price: 10999,
        colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
        selectedColor: 'Space Black',
        storageOptions: ['128GB', '256GB', '512GB'],
        selectedStorage: '128GB'
    },
    'iPhone 14': {
        image: 'images/iPhone 14.jpg',
        price: 8999,
        colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Red'],
        selectedColor: 'Blue',
        storageOptions: ['128GB', '256GB'],
        selectedStorage: '128GB'
    },
    'iPhone 13 Pro Max': {
        image: 'images/iPhone 13 pro max.jpg',
        price: 10499,
        colors: ['Sierra Blue', 'Gold', 'Graphite', 'Silver'],
        selectedColor: 'Sierra Blue',
        storageOptions: ['128GB', '256GB', '512GB'],
        selectedStorage: '128GB'
    },
    'iPhone 13 Pro': {
        image: 'images/iPhone 13 pro.jpg',
        price: 9999,
        colors: ['Sierra Blue', 'Gold', 'Graphite', 'Silver'],
        selectedColor: 'Graphite',
        storageOptions: ['128GB', '256GB'],
        selectedStorage: '128GB'
    },
    'iPhone 13': {
        image: 'images/iPhone 13.jpg',
        price: 8499,
        colors: ['Blue', 'Pink', 'Midnight', 'Starlight', 'Red'],
        selectedColor: 'Midnight',
        storageOptions: ['128GB', '256GB'],
        selectedStorage: '128GB'
    },
    'iPhone 12 Pro Max': {
        image: 'images/iPhone 12 pro max.jpg',
        price: 8999,
        colors: ['Pacific Blue', 'Gold', 'Graphite', 'Silver'],
        selectedColor: 'Pacific Blue',
        storageOptions: ['128GB', '256GB'],
        selectedStorage: '128GB'
    },
    'iPhone 12 Pro': {
        image: 'images/iPhone 12 pro.jpg',
        price: 8499,
        colors: ['Pacific Blue', 'Gold', 'Graphite', 'Silver'],
        selectedColor: 'Graphite',
        storageOptions: ['128GB', '256GB'],
        selectedStorage: '128GB'
    },
    'iPhone 12': {
        image: 'images/iPhone 12.jpg',
        price: 7499,
        colors: ['Blue', 'Green', 'Black', 'White', 'Red'],
        selectedColor: 'Black',
        storageOptions: ['128GB', '256GB'],
        selectedStorage: '128GB'
    },
    'iPhone 11 Pro Max': {
        image: 'images/iPhone 11 pro max.jpg',
        price: 6999,
        colors: ['Midnight Green', 'Gold', 'Space Gray', 'Silver'],
        selectedColor: 'Midnight Green',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    },
    'iPhone 11 Pro': {
        image: 'images/iPhone 11 pro.jpg',
        price: 6499,
        colors: ['Midnight Green', 'Gold', 'Space Gray', 'Silver'],
        selectedColor: 'Space Gray',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    },
    'iPhone 11': {
        image: 'images/iPhone 11.jpg',
        price: 5999,
        colors: ['Purple', 'Yellow', 'Green', 'Black', 'White', 'Red'],
        selectedColor: 'Black',
        storageOptions: ['64GB', '128GB'],
        selectedStorage: '64GB'
    },
    'iPhone XS Max': {
        image: 'images/iPhone XS Max.jpg',
        price: 5299,
        colors: ['Gold', 'Silver', 'Space Gray'],
        selectedColor: 'Gold',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    },
    'iPhone XS': {
        image: 'images/iPhone XS.jpg',
        price: 4999,
        colors: ['Gold', 'Silver', 'Space Gray'],
        selectedColor: 'Space Gray',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    },
    'iPhone XR': {
        image: 'images/iPhone XR.jpg',
        price: 4499,
        colors: ['Blue', 'White', 'Black', 'Yellow', 'Coral', 'Red'],
        selectedColor: 'Red',
        storageOptions: ['64GB', '128GB'],
        selectedStorage: '64GB'
    },
    'iPhone X': {
        image: 'images/iPhone X.jpg',
        price: 3999,
        colors: ['Space Gray', 'Silver'],
        selectedColor: 'Space Gray',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    }
    'iPad Pro': {
        image: 'images/iPad pro.jpg',
        price: 13999,
        colors: ['Space Gray', 'Silver'],
        selectedColor: 'Space Gray',
        storageOptions: ['128GB', '256GB', '512GB', '1TB'],
        selectedStorage: '128GB'
    },
    'iPad Air': {
        image: 'images/iPad Air.jpg',
        price: 9999,
        colors: ['Blue', 'Pink', 'Purple', 'Starlight'],
        selectedColor: 'Blue',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    },
    'iPad mini': {
        image: 'images/iPad mini.jpg',
        price: 8499,
        colors: ['Purple', 'Pink', 'Starlight'],
        selectedColor: 'Purple',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    },
    'iPad': {
        image: 'images/iPad.jpg',
        price: 7499,
        colors: ['Blue', 'Pink', 'Yellow', 'Silver'],
        selectedColor: 'Blue',
        storageOptions: ['64GB', '256GB'],
        selectedStorage: '64GB'
    },
    'iMac M3': {
        image: 'images/iMac.jpeg',
        price: 22999,
        colors: ['Blue', 'Green', 'Pink', 'Silver'],
        selectedColor: 'Blue',
        storageOptions: ['256GB', '512GB'],
        selectedStorage: '256GB'
    },
    'Mac M4': {
        image: 'images/macbook pro.webp',
        price: 27999,
        colors: ['Space Black', 'Silver'],
        selectedColor: 'Space Black',
        storageOptions: ['512GB', '1TB'],
        selectedStorage: '512GB'
    },
    'Mac M3': {
        image: 'images/macbook pro.webp',
        price: 23999,
        colors: ['Space Black', 'Silver'],
        selectedColor: 'Space Black',
        storageOptions: ['256GB', '512GB'],
        selectedStorage: '256GB'
    },
    'Mac Air M4': {
        image: 'images/macbook air.webp',
        price: 18999,
        colors: ['Starlight', 'Midnight', 'Silver'],
        selectedColor: 'Starlight',
        storageOptions: ['256GB', '512GB'],
        selectedStorage: '256GB'
    },
    'Mac Air M3': {
        image: 'images/macbook air.webp',
        price: 15999,
        colors: ['Starlight', 'Midnight', 'Silver'],
        selectedColor: 'Starlight',
        storageOptions: ['256GB', '512GB'],
        selectedStorage: '256GB'
    },
    'Mac Studio': {
        image: 'images/mac studio.jpg',
        price: 30999,
        colors: ['Silver'],
        selectedColor: 'Silver',
        storageOptions: ['512GB', '1TB'],
        selectedStorage: '512GB'
    },
    'iMac Mini': {
        image: 'images/iMac mini.jpg',
        price: 18999,
        colors: ['Silver'],
        selectedColor: 'Silver',
        storageOptions: ['256GB', '512GB'],
        selectedStorage: '256GB'
    },
    'iWatch Ultra 2': {
        image: 'images/iwatch ultra 2.jpeg',
        price: 8999,
        colors: ['Titanium', 'Blue Ocean', 'Trail Loop', 'Alpine Loop'],
        selectedColor: 'Titanium',
        storageOptions: ['32GB'],
        selectedStorage: '32GB'
    },
    'iWatch Series 10': {
        image: 'images/iwatch series 10.jpg',
        price: 7499,
        colors: ['Black', 'White', 'Starlight'],
        selectedColor: 'Black',
        storageOptions: ['32GB'],
        selectedStorage: '32GB'
    },
    'iWatch Series 9': {
        image: 'images/iwatch series 9.jpg',
        price: 6499,
        colors: ['Black', 'White', 'Red'],
        selectedColor: 'Black',
        storageOptions: ['32GB'],
        selectedStorage: '32GB'
    },
    'iWatch SE': {
        image: 'images/iwatch se.jpg',
        price: 4999,
        colors: ['Midnight', 'Silver', 'Starlight'],
        selectedColor: 'Midnight',
        storageOptions: ['32GB'],
        selectedStorage: '32GB'
    }

};
            
            return productDatabase[productName] || {
                image: 'images/default-product.jpg',
                price: 0,
                colors: ['Default'],
                selectedColor: 'Default',
                storageOptions: ['64GB'],
                selectedStorage: '64GB'
            };
        }
    </script>