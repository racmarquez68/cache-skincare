// Datos de las mascarillas (56 tipos)
const masksData = [
    { id: 1, name: "Mascarilla de Aceituna", price: 2.00, image: "ACEITUINA.png", description: "Hidratante y antioxidante" },
    { id: 2, name: "Mascarilla de Aloe Vera", price: 2.00, image: "ALOE VERA.png", description: "Calma y regenera la piel" },
    { id: 3, name: "Mascarilla de Sávila", price: 2.00, image: "SAVILA.png", description: "Regeneración profunda" },
    { id: 4, name: "Mascarilla de Arroz", price: 2.00, image: "M-Arroz.png", description: "Blanqueamiento natural" },
    { id: 5, name: "Mascarilla Blanqueadora", price: 2.00, image: "MF-BLANQUEAMIENTO.png", description: "Unifica tono de piel" },
    { id: 6, name: "Mascarilla Brillante", price: 2.00, image: "BRILLANTE.png", description: "Da luminosidad instantánea" },
    { id: 7, name: "Mascarilla Calmante", price: 2.00, image: "CALMANTE.png", description: "Para pieles sensibles" },
    { id: 8, name: "Mascarilla de Caracol", price: 2.00, image: "CARACOL.png", description: "Regeneración celular" },
    { id: 9, name: "Mascarilla de Cereza", price: 2.00, image: "CEREZA.png", description: "Antioxidante y revitalizante" },
    { id: 10, name: "Mascarilla de Cherry", price: 2.00, image: "CHERRY.png", description: "Vitamina C pura" },
    { id: 11, name: "Mascarilla de Fresa", price: 2.00, image: "FRESA.png", description: "Exfoliante natural" },
    { id: 12, name: "Mascarilla de Granada", price: 2.00, image: "GRANADA.png", description: "Antiedad y firmeza" },
    { id: 13, name: "Mascarilla Hidratante", price: 2.00, image: "HIDRANTANTE.png", description: "Hidratación profunda" },
    { id: 14, name: "Mascarilla de Jengibre", price: 2.00, image: "JENGIBRE.png", description: "Purificante y estimulante" },
    { id: 15, name: "Mascarilla de Jengibre Intenso", price: 2.00, image: "M-JENGIBRE.png", description: "Estimulación circulatoria" },
    { id: 16, name: "Mascarilla de Lavanda", price: 2.00, image: "LAVANDA.png", description: "Relajante y equilibrante" },
    { id: 17, name: "Mascarilla de Leche de Cabra", price: 2.00, image: "M-LECHE DE CABRA.png", description: "Nutrición intensa" },
    { id: 18, name: "Mascarilla de Leche", price: 2.00, image: "LECHE.png", description: "Suavizante natural" },
    { id: 19, name: "Mascarilla de Leche en Polvo", price: 2.00, image: "M-LECHE.png", description: "Blanqueamiento suave" },
    { id: 20, name: "Mascarilla de Lima", price: 2.00, image: "M-LIMA.png", description: "Astringente y refrescante" },
    { id: 21, name: "Mascarilla de Limón", price: 2.00, image: "M-LIMON.png", description: "Despigmentante natural" },
    { id: 22, name: "Mascarilla de Melocotón", price: 2.00, image: "M-MELOCOTON.png", description: "Hidratante y suavizante" },
    { id: 23, name: "Mascarilla de Melón", price: 2.00, image: "M-MELON.png", description: "Refrescante y calmante" },
    { id: 24, name: "Mascarilla Hidratante MF", price: 2.00, image: "MF-HODRANTENTE.png", description: "Hidratación máxima" },
    { id: 25, name: "Mascarilla Reparadora", price: 2.00, image: "MF-REPARACION.png", description: "Reparación celular" },
    { id: 26, name: "Mascarilla de Naranja", price: 2.00, image: "M-NARANJA.png", description: "Vitamina C y brillo" },
    { id: 27, name: "Mascarilla de Oliva", price: 2.00, image: "M-OLIVE.png", description: "Nutrición profunda" },
    { id: 28, name: "Mascarilla Conejo Rehidratante", price: 2.00, image: "MOOYAM-CONEJO-REHIDRANTANTE.png", description: "Rehidratación extrema" },
    { id: 29, name: "Mascarilla Aguacate", price: 2.00, image: "MOOYAM-AGUACATE.png", description: "Nutrición y elasticidad" },
    { id: 30, name: "Mascarilla Arroz Ooyam", price: 2.00, image: "MOOYAM-ARROZ.png", description: "Blanqueamiento suave" },
    { id: 31, name: "Mascarilla Cabra Blanqueadora", price: 2.00, image: "MOOYAM-CABRA-BLANQUEAMIENTO.png", description: "Blanqueamiento intenso" },
    { id: 32, name: "Mascarilla Fresa Ooyam", price: 2.00, image: "MOOYAM-FRESA.png", description: "Exfoliación suave" },
    { id: 33, name: "Mascarilla Granada Ooyam", price: 2.00, image: "MOOYAM-GRANADA.png", description: "Antiedad avanzado" },
    { id: 34, name: "Mascarilla Kiwi", price: 2.00, image: "MOOYAM-KIWI.png", description: "Vitamina C y antioxidante" },
    { id: 35, name: "Mascarilla Koala Reductora", price: 2.00, image: "MOOYAM-KOALA-REDUCCION DE POROS.png", description: "Reduce poros visibles" },
    { id: 36, name: "Mascarilla León Rejuvenecedora", price: 2.00, image: "MOOYAM-LEON-REJUVENECER.png", description: "Rejuvenecimiento facial" },
    { id: 37, name: "Mascarilla Licha", price: 2.00, image: "MOOYAM-LICHA.png", description: "Hidratación extrema" },
    { id: 38, name: "Mascarilla Limón Ooyam", price: 2.00, image: "MOOYAM-LIMON.png", description: "Limpieza profunda" },
    { id: 39, name: "Mascarilla Lobo Nutritiva", price: 2.00, image: "MOOYAM-LOBO-NUTRITIVO.png", description: "Nutrición completa" },
    { id: 40, name: "Mascarilla Miel", price: 2.00, image: "MOOYAM-MIEL.png", description: "Antibacterial y nutritiva" },
    { id: 41, name: "Mascarilla Mono Hidratante", price: 2.00, image: "MOOYAM-MONO-HIDRATANTE.png", description: "Hidratación profunda" },
    { id: 42, name: "Mascarilla Panda Reparadora", price: 2.00, image: "MOOYAM-PANDA-REPARADOR.png", description: "Reparación intensiva" },
    { id: 43, name: "Mascarilla Pepino Ooyam", price: 2.00, image: "MOOYAM-PEPINO.png", description: "Refrescante y calmante" },
    { id: 44, name: "Mascarilla Té Verde", price: 2.00, image: "MOOYAM-TE VERDE.png", description: "Antioxidante y purificante" },
    { id: 45, name: "Mascarilla Tigre Antiedad", price: 2.00, image: "MOOYAM-TIGTR-ANTIEDAD.png", description: "Anti-arrugas avanzado" },
    { id: 46, name: "Mascarilla Unicornio Iluminado", price: 2.00, image: "MOOYAM-UNICORNIO-ILUMINADO.png", description: "Iluminación instantánea" },
    { id: 47, name: "Mascarilla Zorro Nutritiva", price: 2.00, image: "MOOYAM-ZORRO-NUTRITIVO.png", description: "Nutrición facial" },
    { id: 48, name: "Mascarilla Pepino", price: 2.00, image: "M-PEPINO.png", description: "Refrescante y descongestionante" },
    { id: 49, name: "Mascarilla Purificadora", price: 2.00, image: "MF-PURIFICADOR.png", description: "Limpieza profunda" },
    { id: 50, name: "Mascarilla Rejuvenecedora", price: 2.00, image: "REJUVECIMIENTO.png", description: "Estimula colágeno" },
    { id: 51, name: "Mascarilla Reparador", price: 2.00, image: "REPARADOR.png", description: "Reparación cutánea" },
    { id: 52, name: "Mascarilla Sandía", price: 2.00, image: "SANDIA.png", description: "Hidratante y refrescante" },
    { id: 53, name: "Mascarilla Rice", price: 2.00, image: "RICE.png", description: "Exfoliante suave" },
    { id: 54, name: "Mascarilla Sandía Intensa", price: 2.00, image: "M-SANDIA.png", description: "Hidratación extrema" },
    { id: 55, name: "Mascarilla Tomate", price: 2.00, image: "M-TOMATE.png", description: "Astringente y antioxidante" },
    { id: 56, name: "Mascarilla Uva", price: 2.00, image: "UVA.png", description: "Antioxidante y revitalizante" }
];

// Carrito de compras
let cart = JSON.parse(localStorage.getItem('cacheSkincareCart')) || [];

// Elementos DOM
const masksContainer = document.getElementById('masks-container');
const cartToggle = document.getElementById('cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartSummary = document.getElementById('cart-summary');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const discountAmountEl = document.getElementById('discount-amount');
const extraDiscountAmountEl = document.getElementById('extra-discount-amount');
const extraDiscountInfoEl = document.getElementById('extra-discount-info');
const shippingFeeEl = document.getElementById('shipping-fee');
const extraShippingNoticeEl = document.getElementById('extra-shipping-notice');
const cartFinalTotalEl = document.getElementById('cart-final-total');
const cartCount = document.querySelector('.cart-count');
const emptyCartMessage = document.getElementById('empty-cart-message');
const checkoutBtn = document.getElementById('checkout-btn');
const cartNotice = document.getElementById('cart-notice');
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckout = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const orderItems = document.getElementById('order-items');
const orderTotalEl = document.getElementById('order-total');
const confirmPurchaseBtn = document.getElementById('confirm-purchase');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const currentYear = document.getElementById('current-year');

// Constantes para envío y descuentos
const SHIPPING_FEE = 3.50;
const FREE_SHIPPING_THRESHOLD = 10.00;
const DISCOUNT_8_ITEMS = 0.35; // 35% de descuento
const DISCOUNT_25_ITEMS = 0.41; // 41% de descuento

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Establecer año actual
    currentYear.textContent = new Date().getFullYear();
    
    // Cargar mascarillas
    loadMasks();
    
    // Actualizar carrito
    updateCart();
    
    // Event listeners
    setupEventListeners();
});

// Cargar mascarillas en la página
function loadMasks() {
    masksContainer.innerHTML = '';
    
    masksData.forEach(mask => {
        const maskCard = document.createElement('div');
        maskCard.className = 'mask-card';
        
        // Usar placeholder si no hay imagen disponible
        const imagePath = `assets/images/${encodeURIComponent(mask.image)}`;
        const placeholderUrl = `https://via.placeholder.com/300x220/f8f8f8/8a6d3b?text=${encodeURIComponent(mask.name.split(' ')[1] || mask.name.split(' ')[0])}`;
        
        maskCard.innerHTML = `
            <div class="mask-image-container">
                <img src="${imagePath}" alt="${mask.name}" class="mask-image" 
                     onerror="this.onerror=null; this.src='${placeholderUrl}';">
            </div>
            <div class="mask-content">
                <h3 class="mask-title">${mask.name}</h3>
                <p class="mask-description">${mask.description}</p>
                <div class="mask-price">$${mask.price.toFixed(2)}</div>
                <button class="btn-add-to-cart" data-id="${mask.id}">
                    <i class="fas fa-cart-plus"></i> Agregar al carrito
                </button>
            </div>
        `;
        
        masksContainer.appendChild(maskCard);
    });
    
    // Event listeners para botones "Agregar al carrito"
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const maskId = parseInt(this.getAttribute('data-id'));
            addToCart(maskId);
        });
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Toggle menú móvil
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Carrito toggle
    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        cartOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeCart.addEventListener('click', () => {
        cartOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar carrito al hacer clic fuera
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', openCheckout);
    
    closeCheckout.addEventListener('click', () => {
        checkoutOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar checkout al hacer clic fuera
    checkoutOverlay.addEventListener('click', (e) => {
        if (e.target === checkoutOverlay) {
            checkoutOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Formulario de checkout
    checkoutForm.addEventListener('submit', processCheckout);
    
    // Cerrar carrito al presionar Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cartOverlay.style.display = 'none';
            checkoutOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Funciones del carrito
function addToCart(maskId) {
    const mask = masksData.find(m => m.id === maskId);
    if (!mask) return;
    
    const existingItem = cart.find(item => item.id === maskId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: mask.id,
            name: mask.name,
            price: mask.price,
            image: mask.image,
            quantity: 1
        });
    }
    
    // Guardar en localStorage
    saveCart();
    
    // Actualizar UI
    updateCart();
    
    // Mostrar feedback visual
    showNotification(`${mask.name} agregada al carrito`);
    
    // Si el carrito está abierto, actualizar
    if (cartOverlay.style.display === 'flex') {
        renderCartItems();
    }
}

function removeFromCart(maskId) {
    cart = cart.filter(item => item.id !== maskId);
    saveCart();
    updateCart();
    renderCartItems();
}

function updateQuantity(maskId, change) {
    const item = cart.find(item => item.id === maskId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(maskId);
    } else {
        saveCart();
        updateCart();
        renderCartItems();
    }
}

function saveCart() {
    localStorage.setItem('cacheSkincareCart', JSON.stringify(cart));
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Habilitar/deshabilitar botón de checkout
    checkoutBtn.disabled = totalItems === 0;
    
    // Actualizar mensaje de descuento
    if (totalItems >= 25) {
        cartNotice.textContent = "¡Descuento del 41% aplicado!";
        cartNotice.style.color = "#27ae60";
        cartNotice.style.fontWeight = "bold";
    } else if (totalItems >= 8) {
        cartNotice.textContent = "¡Descuento del 35% aplicado!";
        cartNotice.style.color = "#4caf50";
        cartNotice.style.fontWeight = "bold";
    } else if (totalItems >= 1) {
        cartNotice.textContent = `Agrega ${8 - totalItems} más para 35% de descuento | ${25 - totalItems} más para 41% de descuento`;
        cartNotice.style.color = "";
        cartNotice.style.fontWeight = "";
    } else {
        cartNotice.textContent = "Agrega 8 mascarillas para 35% de descuento | 25 mascarillas para 41% de descuento";
        cartNotice.style.color = "";
        cartNotice.style.fontWeight = "";
    }
}

function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    let discount = 0;
    let discountType = 'none';
    
    // Aplicar descuento del 41% si hay 25 o más items
    if (totalItems >= 25) {
        discount = subtotal * DISCOUNT_25_ITEMS;
        discountType = '41%';
    } 
    // Aplicar descuento del 35% si hay 8 o más items (pero menos de 25)
    else if (totalItems >= 8) {
        discount = subtotal * DISCOUNT_8_ITEMS;
        discountType = '35%';
    }
    
    // Calcular envío - $3.50 SOLO si compra es mayor a $10
    let shipping = 0;
    if (subtotal > FREE_SHIPPING_THRESHOLD) {
        shipping = SHIPPING_FEE;
    }
    
    const total = subtotal - discount + shipping;
    
    return {
        subtotal: subtotal.toFixed(2),
        discount: discount.toFixed(2),
        discountType: discountType,
        shipping: shipping.toFixed(2),
        requiresExtraShipping: subtotal <= FREE_SHIPPING_THRESHOLD,
        total: total.toFixed(2),
        totalItems: totalItems
    };
}

function renderCartItems() {
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartSummary.style.display = 'none';
        cartItemsContainer.innerHTML = '';
        cartItemsContainer.appendChild(emptyCartMessage);
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartSummary.style.display = 'block';
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const imagePath = `assets/images/${encodeURIComponent(item.image)}`;
        const placeholderUrl = `https://via.placeholder.com/80/f8f8f8/8a6d3b?text=${encodeURIComponent(item.name.split(' ')[1] || item.name.split(' ')[0])}`;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${imagePath}" alt="${item.name}" 
                     onerror="this.onerror=null; this.src='${placeholderUrl}';">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-controls">
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Event listeners para controles de cantidad
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const maskId = parseInt(this.getAttribute('data-id'));
            updateQuantity(maskId, -1);
        });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const maskId = parseInt(this.getAttribute('data-id'));
            updateQuantity(maskId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const maskId = parseInt(this.getAttribute('data-id'));
            removeFromCart(maskId);
        });
    });
    
    // Actualizar totales
    const totals = calculateCartTotals();
    cartSubtotalEl.textContent = `$${totals.subtotal}`;
    
    // Mostrar/ocultar descuentos según corresponda
    if (totals.discountType === '35%') {
        discountAmountEl.textContent = `-$${totals.discount}`;
        discountAmountEl.parentElement.style.display = 'flex';
        extraDiscountInfoEl.style.display = 'none';
    } else if (totals.discountType === '41%') {
        discountAmountEl.textContent = `-$${(parseFloat(totals.subtotal) * DISCOUNT_8_ITEMS).toFixed(2)}`;
        discountAmountEl.parentElement.style.display = 'flex';
        
        const extraDiscount = parseFloat(totals.discount) - (parseFloat(totals.subtotal) * DISCOUNT_8_ITEMS);
        extraDiscountAmountEl.textContent = `-$${extraDiscount.toFixed(2)}`;
        extraDiscountInfoEl.style.display = 'flex';
    } else {
        discountAmountEl.parentElement.style.display = 'none';
        extraDiscountInfoEl.style.display = 'none';
    }
    
    // Mostrar/ocultar envío
    if (parseFloat(totals.shipping) > 0) {
        shippingFeeEl.style.display = 'flex';
        shippingFeeEl.innerHTML = `<span>Envío:</span><span>$${totals.shipping}</span>`;
    } else {
        shippingFeeEl.style.display = 'none';
    }
    
    // Mostrar aviso de envío extra si aplica
    if (totals.requiresExtraShipping) {
        extraShippingNoticeEl.style.display = 'flex';
        extraShippingNoticeEl.innerHTML = `<span>Compra menor a $${FREE_SHIPPING_THRESHOLD}:</span><span>Cobro extra por zona (se validará)</span>`;
    } else {
        extraShippingNoticeEl.style.display = 'none';
    }
    
    cartFinalTotalEl.textContent = `$${totals.total}`;
}

// Checkout
function openCheckout() {
    if (cart.length === 0) return;
    
    // Renderizar resumen del pedido
    renderOrderSummary();
    
    // Mostrar checkout
    checkoutOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Cerrar carrito
    cartOverlay.style.display = 'none';
}

function renderOrderSummary() {
    orderItems.innerHTML = '';
    
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        orderItems.appendChild(orderItem);
    });
    
    const totals = calculateCartTotals();
    
    // Limpiar el contenedor de resumen de orden primero
    const orderSummaryContainer = document.querySelector('.order-summary');
    const existingTotal = orderSummaryContainer.querySelector('.order-total');
    
    // Limpiar elementos anteriores del resumen
    const existingSummaryLines = orderSummaryContainer.querySelectorAll('.order-summary-line, .order-extra-notice, .order-extra-discount');
    existingSummaryLines.forEach(el => {
        if (el !== existingTotal) el.remove();
    });
    
    // Crear elementos de resumen
    const subtotalEl = document.createElement('div');
    subtotalEl.className = 'order-summary-line';
    subtotalEl.innerHTML = `<span>Subtotal:</span><span>$${totals.subtotal}</span>`;
    
    // Insertar antes del total
    orderSummaryContainer.insertBefore(subtotalEl, existingTotal);
    
    // Añadir descuentos según corresponda
    if (totals.discountType === '35%') {
        const discountEl = document.createElement('div');
        discountEl.className = 'order-summary-line';
        discountEl.innerHTML = `<span>Descuento 35%:</span><span>-$${totals.discount}</span>`;
        orderSummaryContainer.insertBefore(discountEl, existingTotal);
    } else if (totals.discountType === '41%') {
        const discount35El = document.createElement('div');
        discount35El.className = 'order-summary-line';
        discount35El.innerHTML = `<span>Descuento 35%:</span><span>-$${(parseFloat(totals.subtotal) * DISCOUNT_8_ITEMS).toFixed(2)}</span>`;
        orderSummaryContainer.insertBefore(discount35El, existingTotal);
        
        const extraDiscountEl = document.createElement('div');
        extraDiscountEl.className = 'order-summary-line order-extra-discount';
        const extraDiscount = parseFloat(totals.discount) - (parseFloat(totals.subtotal) * DISCOUNT_8_ITEMS);
        extraDiscountEl.innerHTML = `<span>Descuento extra 41%:</span><span>-$${extraDiscount.toFixed(2)}</span>`;
        orderSummaryContainer.insertBefore(extraDiscountEl, existingTotal);
    }
    
    // Añadir envío si aplica
    if (parseFloat(totals.shipping) > 0) {
        const shippingEl = document.createElement('div');
        shippingEl.className = 'order-summary-line order-shipping';
        shippingEl.innerHTML = `<span>Envío:</span><span>$${totals.shipping}</span>`;
        orderSummaryContainer.insertBefore(shippingEl, existingTotal);
    }
    
    // Añadir aviso de envío extra si aplica
    if (totals.requiresExtraShipping) {
        const extraNoticeEl = document.createElement('div');
        extraNoticeEl.className = 'order-extra-notice';
        extraNoticeEl.innerHTML = `<span>Compra menor a $${FREE_SHIPPING_THRESHOLD}:</span><span>Cobro extra por zona (se validará al confirmar dirección)</span>`;
        orderSummaryContainer.insertBefore(extraNoticeEl, existingTotal);
    }
    
    orderTotalEl.textContent = `$${totals.total}`;
}

function processCheckout(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (!name || !phone || !address) {
        alert('Por favor complete todos los campos obligatorios.');
        return;
    }
    
    // Formatear mensaje para WhatsApp
    const message = formatWhatsAppMessage(name, phone, address, paymentMethod);
    
    // Abrir WhatsApp
    const phoneNumber = "50368329957";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Limpiar carrito después de enviar
    cart = [];
    saveCart();
    updateCart();
    renderCartItems();
    
    // Cerrar checkout
    checkoutOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Mostrar confirmación
    showNotification('¡Pedido enviado por WhatsApp!', 'success');
    
    // Resetear formulario
    checkoutForm.reset();
}

function formatWhatsAppMessage(name, phone, address, paymentMethod) {
    const totals = calculateCartTotals();
    
    let message = `¡Hola! Nuevo pedido de CACHE SKINCARE 🛍️\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Teléfono:* ${phone}\n`;
    message += `*Dirección:* ${address}\n`;
    message += `*Método de pago:* ${paymentMethod === 'contraentrega' ? 'Contraentrega' : 'Transferencia bancaria'}\n\n`;
    message += `*Detalles del pedido:*\n`;
    
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n*Subtotal:* $${totals.subtotal}\n`;
    
    if (totals.discountType === '35%') {
        message += `*Descuento 35%:* -$${totals.discount}\n`;
    } else if (totals.discountType === '41%') {
        message += `*Descuento 35%:* -$${(parseFloat(totals.subtotal) * DISCOUNT_8_ITEMS).toFixed(2)}\n`;
        const extraDiscount = parseFloat(totals.discount) - (parseFloat(totals.subtotal) * DISCOUNT_8_ITEMS);
        message += `*Descuento extra 41%:* -$${extraDiscount.toFixed(2)}\n`;
    }
    
    if (parseFloat(totals.shipping) > 0) {
        message += `*Costo de envío:* $${totals.shipping}\n`;
        message += `*Nota:* Envío de $${SHIPPING_FEE} aplicado (compra mayor a $${FREE_SHIPPING_THRESHOLD})\n`;
    } else {
        message += `*Costo de envío:* Por validar\n`;
        message += `*Nota:* Compra menor a $${FREE_SHIPPING_THRESHOLD} - se validará cobro extra según zona\n`;
    }
    
    message += `*Total a pagar:* $${totals.total}\n\n`;
    message += `*Entrega estimada:* 1-4 días hábiles según localidad\n`;
    message += `¡Gracias! 💖`;
    
    return message;
}

// Utilidades
function showNotification(message, type = 'info') {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Estilos para notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    // Agregar al documento
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Estilos de animación para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar carrito cuando se abre
cartToggle.addEventListener('click', () => {
    renderCartItems();
});

// Verificar imágenes disponibles
function checkImageAvailability() {
    console.log("Verificando disponibilidad de imágenes...");
    masksData.forEach(mask => {
        const img = new Image();
        const imagePath = `assets/images/${encodeURIComponent(mask.image)}`;
        img.onload = function() {
            console.log(`✓ ${mask.image} disponible`);
        };
        img.onerror = function() {
            console.warn(`✗ ${mask.image} NO disponible en: ${imagePath}`);
        };
        img.src = imagePath;
    });
}

// Ejecutar verificación después de cargar la página
setTimeout(checkImageAvailability, 1000);