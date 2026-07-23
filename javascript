<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FastBite - Makanan Cepat Saji & Lezat</title>
  <!-- Google Font: Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --primary: #ff4757;
      --primary-hover: #e84118;
      --secondary: #ffa502;
      --dark: #2f3542;
      --gray: #f1f2f6;
      --text-muted: #747d8c;
      --white: #ffffff;
      --radius: 16px;
      --shadow: 0 10px 25px rgba(0,0,0,0.05);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      background-color: #fafafa;
      color: var(--dark);
      line-height: 1.6;
      position: relative;
    }

    /* Navbar */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 8%;
      background: var(--white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.03);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary);
    }

    .logo span {
      color: var(--secondary);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--dark);
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    .cart-btn {
      background: var(--primary);
      color: var(--white);
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background 0.3s, transform 0.2s;
    }

    .cart-btn:hover {
      background: var(--primary-hover);
    }

    .cart-btn:active {
      transform: scale(0.95);
    }

    /* Hero Section */
    .hero {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      align-items: center;
      padding: 4rem 8%;
      gap: 2rem;
    }

    .hero-text h1 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    .hero-text h1 span {
      color: var(--primary);
    }

    .hero-text p {
      color: var(--text-muted);
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
    }

    .btn-primary {
      background: var(--primary);
      color: var(--white);
      padding: 0.8rem 1.8rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      box-shadow: 0 8px 20px rgba(255, 71, 87, 0.3);
      transition: transform 0.2s;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
    }

    .hero-img {
      text-align: center;
      font-size: 10rem;
      line-height: 1;
    }

    /* Category Filter */
    .categories {
      padding: 2rem 8%;
      text-align: center;
    }

    .category-chips {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }

    .chip {
      padding: 0.6rem 1.5rem;
      background: var(--white);
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s;
    }

    .chip.active, .chip:hover {
      background: var(--primary);
      color: var(--white);
      border-color: var(--primary);
    }

    /* Food Menu Grid */
    .menu-section {
      padding: 2rem 8% 4rem 8%;
    }

    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .food-card {
      background: var(--white);
      border-radius: var(--radius);
      padding: 1.5rem;
      box-shadow: var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
    }

    .food-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }

    .food-emoji {
      font-size: 5rem;
      text-align: center;
      margin-bottom: 1rem;
      background: var(--gray);
      border-radius: 12px;
      padding: 1rem;
    }

    .food-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }

    .food-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--dark);
    }

    .add-btn {
      background: var(--secondary);
      color: var(--white);
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, transform 0.1s;
    }

    .add-btn:hover {
      background: #e09200;
    }

    .add-btn:active {
      transform: scale(0.9);
    }

    /* Cart Overlay & Drawer */
    .cart-drawer-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 200;
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .cart-drawer-overlay.open {
      display: block;
      opacity: 1;
    }

    .cart-drawer {
      position: fixed;
      top: 0;
      right: -400px;
      width: 100%;
      max-width: 400px;
      height: 100%;
      background: var(--white);
      z-index: 201;
      box-shadow: -5px 0 25px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      transition: right 0.3s ease;
    }

    .cart-drawer.open {
      right: 0;
    }

    .drawer-header {
      padding: 1.5rem;
      border-bottom: 1px solid var(--gray);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .drawer-header h3 {
      font-size: 1.3rem;
      font-weight: 700;
    }

    .close-btn {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-muted);
    }

    .drawer-body {
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    }

    .cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--gray);
    }

    .cart-item-info {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .cart-item-emoji {
      font-size: 2rem;
      background: var(--gray);
      padding: 0.4rem;
      border-radius: 8px;
    }

    .cart-item-details h4 {
      font-size: 0.95rem;
      font-weight: 600;
    }

    .cart-item-details p {
      font-size: 0.85rem;
      color: var(--primary);
      font-weight: 700;
    }

    .cart-item-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .qty-btn {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid #ddd;
      background: var(--white);
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .qty-btn:hover {
      background: var(--gray);
    }

    .empty-cart-msg {
      text-align: center;
      color: var(--text-muted);
      margin-top: 3rem;
      font-size: 0.95rem;
    }

    .drawer-footer {
      padding: 1.5rem;
      border-top: 1px solid var(--gray);
      background: #fafafa;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }

    .total-price {
      font-size: 1.3rem;
      color: var(--primary);
    }

    .checkout-btn {
      width: 100%;
      background: var(--primary);
      color: var(--white);
      border: none;
      padding: 0.9rem;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.3s;
      margin-top: 0.5rem;
    }

    .checkout-btn:hover {
      background: var(--primary-hover);
    }

    @media (max-width: 768px) {
      .hero-text h1 {
        font-size: 2.2rem;
      }
      .nav-links {
        display: none;
      }
      .cart-drawer {
        max-width: 100%;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="logo">Fast<span>Bite</span></div>
    <ul class="nav-links">
      <li><a href="#home">Beranda</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#promo">Promo</a></li>
    </ul>
    <button class="cart-btn" id="openCartBtn">
      🛒 Keranjang (<span id="cartCount">0</span>)
    </button>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="hero-text">
      <h1>Nikmati <span>Makanan Cepat Saji</span> Favoritmu Kapan Saja</h1>
      <p>Pesan burger, pizza, dan makanan lezat lainnya dengan pengiriman super cepat langsung ke rumahmu.</p>
      <div class="cta-buttons">
        <a href="#menu" class="btn-primary">Pesan Sekarang</a>
      </div>
    </div>
    <div class="hero-img">
      🍔
    </div>
  </section>

  <!-- Category Filter -->
  <section class="categories">
    <h2>Pilih Kategori Menu</h2>
    <div class="category-chips">
      <div class="chip active" data-category="Semua">Semua</div>
      <div class="chip" data-category="Burger">Burger</div>
      <div class="chip" data-category="Pizza">Pizza</div>
      <div class="chip" data-category="Ayam">Ayam</div>
      <div class="chip" data-category="Minuman">Minuman</div>
    </div>
  </section>

  <!-- Food Menu Section -->
  <section class="menu-section" id="menu">
    <div class="menu-grid">
      
      <!-- Card 1 -->
      <div class="food-card" data-category="Burger" data-id="1" data-title="Cheese Burger Supreme" data-price="35000" data-emoji="🍔">
        <div class="food-emoji">🍔</div>
        <div class="food-title">Cheese Burger Supreme</div>
        <div class="food-desc">Daging sapi pilihan, keju leleh, dan sayuran segar.</div>
        <div class="card-footer">
          <span class="price">Rp 35.000</span>
          <button class="add-btn">+</button>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="food-card" data-category="Pizza" data-id="2" data-title="Pepperoni Pizza" data-price="65000" data-emoji="🍕">
        <div class="food-emoji">🍕</div>
        <div class="food-title">Pepperoni Pizza</div>
        <div class="food-desc">Topping pepperoni gurih dengan keju mozzarella melimpah.</div>
        <div class="card-footer">
          <span class="price">Rp 65.000</span>
          <button class="add-btn">+</button>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="food-card" data-category="Ayam" data-id="3" data-title="Crispy Fried Chicken" data-price="28000" data-emoji="🍗">
        <div class="food-emoji">🍗</div>
        <div class="food-title">Crispy Fried Chicken</div>
        <div class="food-desc">Ayam goreng renyah di luar, lembut dan juicy di dalam.</div>
        <div class="card-footer">
          <span class="price">Rp 28.000</span>
          <button class="add-btn">+</button>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="food-card" data-category="Minuman" data-id="4" data-title="Iced Cola Regular" data-price="12000" data-emoji="🥤">
        <div class="food-emoji">🥤</div>
        <div class="food-title">Iced Cola Regular</div>
        <div class="food-desc">Minuman bersoda dingin yang menyegarkan dahaga.</div>
        <div class="card-footer">
          <span class="price">Rp 12.000</span>
          <button class="add-btn">+</button>
        </div>
      </div>

    </div>
  </section>

  <!-- Cart Drawer Overlay -->
  <div class="cart-drawer-overlay" id="cartOverlay"></div>

  <!-- Cart Drawer Container -->
  <div class="cart-drawer" id="cartDrawer">
    <div class="drawer-header">
      <h3>Keranjang Belanja</h3>
      <button class="close-btn" id="closeCartBtn">&times;</button>
    </div>
    
    <div class="drawer-body" id="cartItemsContainer">
      <!-- Item keranjang akan di-render di sini via JS -->
    </div>

    <div class="drawer-footer">
      <div class="summary-row">
        <span>Total Item:</span>
        <span id="totalItemsCount">0</span>
      </div>
      <div class="summary-row">
        <span>Total Harga:</span>
        <span class="total-price" id="totalPrice">Rp 0</span>
      </div>
      <button class="checkout-btn" id="checkoutBtn">Lanjutkan Pembayaran</button>
    </div>
  </div>

  <!-- JavaScript Logic -->
  <script>
    // State Keranjang Belanja
    let cart = [];

    // Elemen DOM
    const cartCountEl = document.getElementById('cartCount');
    const totalItemsCountEl = document.getElementById('totalItemsCount');
    const totalPriceEl = document.getElementById('totalPrice');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Helper: Format Angka ke Rupiah
    function formatRupiah(amount) {
      return 'Rp ' + amount.toLocaleString('id-ID');
    }

    // Tampilkan / Sembunyikan Drawer Keranjang
    function toggleCart(show) {
      if (show) {
        cartOverlay.classList.add('open');
        cartDrawer.classList.add('open');
      } else {
        cartOverlay.classList.remove('open');
        cartDrawer.classList.remove('open');
      }
    }

    openCartBtn.addEventListener('click', () => toggleCart(true));
    closeCartBtn.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));

    // Fungsi Tambah Item ke Keranjang
    function addToCart(product) {
      const existingItem = cart.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      updateCartUI();
    }

    // Fungsi Ubah Kuantitas Item (+1 / -1)
    function updateQuantity(productId, change) {
      const item = cart.find(item => item.id === productId);

      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          cart = cart.filter(item => item.id !== productId);
        }
      }

      updateCartUI();
    }

    // Fungsi Utama untuk Meng-update Tampilan UI Keranjang
    function updateCartUI() {
      // Hitung Total Kuantitas dan Total Harga
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      // Update Teks Elemen
      cartCountEl.textContent = totalItems;
      totalItemsCountEl.textContent = totalItems;
      totalPriceEl.textContent = formatRupiah(totalPrice);

      // Render Daftar Item di dalam Drawer
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Keranjang belanjaanmu masih kosong.</p>';
      } else {
        cartItemsContainer.innerHTML = cart.map(item => `
          <div class="cart-item">
            <div class="cart-item-info">
              <div class="cart-item-emoji">${item.emoji}</div>
              <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>${formatRupiah(item.price)}</p>
              </div>
            </div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
          </div>
        `).join('');
      }
    }

    // Listener Tombol Tambah (+) Makanan
    document.querySelectorAll('.food-card .add-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const card = e.target.closest('.food-card');
        const product = {
          id: parseInt(card.dataset.id),
          title: card.dataset.title,
          price: parseInt(card.dataset.price),
          emoji: card.dataset.emoji
        };

        addToCart(product);
      });
    });

    // Listener Filter Kategori Menu
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const category = chip.dataset.category;
        document.querySelectorAll('.food-card').forEach(card => {
          if (category === 'Semua' || card.dataset.category === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Event Pembayaran / Checkout
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Keranjang belanja Anda kosong!');
        return;
      }
      alert('Terima kasih! Pesanan Anda telah berhasil dibuat.');
      cart = [];
      updateCartUI();
      toggleCart(false);
    });

    // Inisialisasi Tampilan Awal
    updateCartUI();
  </script>
</body>
</html>
