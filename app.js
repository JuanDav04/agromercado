/* DATA */

const navItems = [
  { icon: "🏠", label: "Inicio" },
  { icon: "📦", label: "Mis pedidos" },
  { icon: "❤️", label: "Favoritos" },
  { icon: "👨‍🌾", label: "Productores" },
  { icon: "💬", label: "Mensajes" },
  { icon: "📊", label: "Historial" },
  { icon: "⚙️", label: "Ajustes" },
];

/* Productos con su categoria */
const categories = [
  { icon: "🥬", label: "Verduras",  key: "verduras"  },
  { icon: "🍎", label: "Frutas",    key: "frutas"    },
  { icon: "🌽", label: "Granos",    key: "granos"    },
  { icon: "🥛", label: "Lácteos",   key: "lacteos"   },
  { icon: "🍯", label: "Miel",      key: "miel"      },
  { icon: "🌿", label: "Hierbas",   key: "hierbas"   },
];

/* Productires con la info */
const producers = [
  { id:1, name:"Luis Pérez",   location:"Tunja, Boyacá",           avatar:"👨‍🌾", rating:4.8, sales:342, joined:"2022", verified:true,  bio:"Agricultor de tercera generación con más de 15 años cultivando tomates y hortalizas de manera tradicional y sostenible en las tierras frías de Boyacá.", specialty:"Hortalizas", cover:"#d4edda" },
  { id:2, name:"Rosa Gómez",   location:"Zipaquirá, Cundinamarca", avatar:"👩‍🌾", rating:4.6, sales:215, joined:"2023", verified:true,  bio:"Productora de papa criolla orgánica certificada. Mi finca lleva 20 años sin usar agroquímicos.", specialty:"Tubérculos", cover:"#fff3cd" },
  { id:3, name:"Carlos Ruiz",  location:"Ibagué, Tolima",          avatar:"🧑‍🌾", rating:4.9, sales:489, joined:"2021", verified:true,  bio:"Especialista en aguacate Hass de clima cálido. Exporto a Bogotá y Medellín con entregas semanales garantizadas.", specialty:"Aguacates", cover:"#e6f4ea" },
  { id:4, name:"Ana Torres",   location:"Neiva, Huila",            avatar:"👩‍🌾", rating:4.5, sales:132, joined:"2023", verified:false, bio:"Cultivo maíz amarillo criollo en el valle del Huila. Trabajo con métodos ancestrales que preservan la tierra.", specialty:"Granos", cover:"#fffbe6" },
  { id:5, name:"Miguel Lara",  location:"Medellín, Antioquia",     avatar:"👨‍🌾", rating:4.7, sales:201, joined:"2022", verified:true,  bio:"Productor de fresas y frutas de temporada en las montañas de Antioquia. Cosecha artesanal garantizada.", specialty:"Frutas", cover:"#fde8ef" },
  { id:6, name:"Gloria Mora",  location:"Bucaramanga, Santander",  avatar:"👩‍🌾", rating:5.0, sales:380, joined:"2021", verified:true,  bio:"Apicultora con 10 años de experiencia. Mis abejas nativas producen la mejor miel del oriente colombiano.", specialty:"Miel", cover:"#fff3cd" },
];

/* Productos */
const products = [
  { id:1,  name:"Tomate Chonto",    farmer:"Luis Pérez",  farmerId:1, location:"Boyacá",       price:3200,  unit:"kg",     rating:4.8, reviews:34,  badge:"Fresco hoy", emoji:"🍅", color:"#fde8e8", category:"verduras", description:"Tomate chonto cosechado esta mañana en las fincas de Boyacá. Ideal para ensaladas, salsas y jugos. Cultivado sin pesticidas, con riego por goteo.",                            details:["Sin pesticidas","Cosecha del día","Riego tecnificado","Certificado orgánico"], stock:120, minOrder:2 },
  { id:2,  name:"Papa Criolla",     farmer:"Rosa Gómez",  farmerId:2, location:"Cundinamarca", price:2500,  unit:"kg",     rating:4.6, reviews:52,  badge:"Más vendido", emoji:"🥔", color:"#fef3e2", category:"verduras", description:"Papa criolla seleccionada de los mejores cultivos de Cundinamarca. Perfecta para ajiaco, sopas y papas chorreadas.",                                                       details:["Orgánica certificada","Lavada y seleccionada","Sin agroquímicos","Tamaño uniforme"], stock:200, minOrder:5 },
  { id:3,  name:"Aguacate Hass",    farmer:"Carlos Ruiz", farmerId:3, location:"Tolima",       price:4800,  unit:"kg",     rating:4.9, reviews:88,  badge:"Orgánico",    emoji:"🥑", color:"#e6f4ea", category:"frutas",   description:"Aguacate Hass premium del Tolima, en su punto exacto de maduración. Rico en grasas saludables y vitaminas.",                                                               details:["Premium Hass","Maduración controlada","Finca propia","Exportación calidad"], stock:80, minOrder:3 },
  { id:4,  name:"Maíz Amarillo",    farmer:"Ana Torres",  farmerId:4, location:"Huila",        price:1800,  unit:"kg",     rating:4.5, reviews:21,  badge:null,           emoji:"🌽", color:"#fffbe6", category:"granos",   description:"Maíz amarillo del Huila, perfecto para arepas, mazamorra y alimentación animal. Secado al sol de manera natural.",                                                        details:["Secado natural","Sin conservantes","Grano entero","Variedad criolla"], stock:500, minOrder:10 },
  { id:5,  name:"Fresas Silvestres",farmer:"Miguel Lara", farmerId:5, location:"Antioquia",    price:5500,  unit:"500g",   rating:4.7, reviews:63,  badge:"Temporada",   emoji:"🍓", color:"#fde8ef", category:"frutas",   description:"Fresas de temporada recogidas a mano en las laderas de Antioquia. Dulces, jugosas y perfectas para mermeladas.",                                                         details:["De temporada","Recolección manual","Sin refrigeración previa","Ultra frescas"], stock:60, minOrder:1 },
  { id:6,  name:"Miel de Abeja",    farmer:"Gloria Mora", farmerId:6, location:"Santander",    price:18000, unit:"frasco", rating:5.0, reviews:117, badge:"Premium",     emoji:"🍯", color:"#fff3cd", category:"miel",     description:"Miel pura de abejas nativas de Santander, sin procesar ni pasteurizar. Conserva todas sus propiedades naturales.",                                                          details:["100% pura","Sin procesar","Abejas nativas","INVIMA registrado"], stock:45, minOrder:1 },
  { id:7,  name:"Lechuga Batavia",  farmer:"Luis Pérez",  farmerId:1, location:"Boyacá",       price:1500,  unit:"und",    rating:4.4, reviews:18,  badge:null,           emoji:"🥬", color:"#e8f5e8", category:"verduras", description:"Lechuga batavia fresca del altiplano boyacense. Hojas crujientes y sabor suave, ideal para ensaladas.",                                                              details:["Hidropónica","Sin tierra","Extra limpia","Cosecha semanal"], stock:80, minOrder:2 },
  { id:8,  name:"Arroz Blanco",     farmer:"Ana Torres",  farmerId:4, location:"Huila",        price:3500,  unit:"kg",     rating:4.6, reviews:44,  badge:null,           emoji:"🌾", color:"#fafaf0", category:"granos",   description:"Arroz blanco de grano largo cultivado en las fértiles tierras del Huila. Sin mezclas ni aditivos.",                                                                     details:["Grano largo","Sin aditivos","Secado natural","Molido artesanal"], stock:300, minOrder:5 },
  { id:9,  name:"Leche Fresca",     farmer:"Rosa Gómez",  farmerId:2, location:"Cundinamarca", price:2200,  unit:"litro",  rating:4.8, reviews:72,  badge:"Del día",      emoji:"🥛", color:"#f0f8ff", category:"lacteos",  description:"Leche fresca de vaca pastoreo libre, sin hormonas ni antibióticos. Recogida cada mañana.",                                                                             details:["Pastoreo libre","Sin hormonas","Ordeño diario","Alta proteína"], stock:50, minOrder:2 },
  { id:10, name:"Hierbabuena",      farmer:"Carlos Ruiz", farmerId:3, location:"Tolima",       price:1200,  unit:"manojo", rating:4.3, reviews:29,  badge:null,           emoji:"🌿", color:"#e8f5e8", category:"hierbas",  description:"Hierbabuena fresca cultivada sin agroquímicos. Perfecta para aromáticas, mojitos y recetas medicinales.",                                                              details:["Sin químicos","Aroma intenso","Corte fresco","Variedad nativa"], stock:120, minOrder:1 },
];

/* Comentarios */
const reviewsData = [
  { user: "Ana V.",   rating: 5, comment: "Excelente calidad, llegó muy fresco!",        date: "hace 2 días" },
  { user: "Maycol G.",   rating: 5, comment: "El mejor que he comprado en mucho tiempo",     date: "hace 1 semana" },
  { user: "Anderson O.",  rating: 4, comment: "Buena calidad, entrega puntual",               date: "hace 2 semanas" },
  { user: "Juanda P.",  rating: 5, comment: "Muy buen productor, entrega rápida y fresca",  date: "hace 3 semanas" },
  { user: "Santiago O.",  rating: 2, comment: "Se me echo a perder!",  date: "hace 3 semanas" },
];

/* Estado*/

const state = {
  activeNav:        0,
  activeCategory:   -1,
  searchQuery:      "",
  currentView:      "dashboard",
  selectedProduct:  null,
  selectedProducer: null,
  activeTab:        "info",
  detailQty:        1,
  cart: [
    { name:"Tomate Chonto", qty:2, price:3200, emoji:"🍅" },
    { name:"Aguacate Hass", qty:1, price:4800, emoji:"🥑" },
  ],
};

/* Helper */

const fmt   = n => n.toLocaleString("es-CO");
const stars = r => "★".repeat(Math.floor(r)) + "☆".repeat(5 - Math.floor(r));

function filteredProducts() {
  return products.filter(p => {
    const matchCat    = state.activeCategory === -1 || p.category === categories[state.activeCategory].key;
    const matchSearch = !state.searchQuery || p.name.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
}

function render() { renderNav(); renderCart(); renderMain(); }

/* Barra lateral */

function renderNav() {
  document.getElementById("sidebar-nav").innerHTML = navItems.map((item, i) => `
    <div class="nav-item ${state.activeNav === i ? "active" : ""}" onclick="setNav(${i})">
      <span style="font-size:16px">${item.icon}</span>${item.label}
    </div>`).join("");
}

function setNav(i) {
  state.activeNav   = i;
  state.currentView = "dashboard";
  renderNav();
  renderMain();
}

/* Carrito */

function cartAdd(name, price, emoji, qty = 1) {
  const ex = state.cart.find(x => x.name === name);
  if (ex) ex.qty += qty;
  else state.cart.push({ name, price, emoji, qty });
  renderCart();
}

function cartRemove(name) {
  const ex = state.cart.find(x => x.name === name);
  if (!ex) return;
  ex.qty > 1 ? ex.qty-- : state.cart.splice(state.cart.indexOf(ex), 1);
  renderCart();
}

function renderCart() {
  const itemsEl   = document.getElementById("cart-items");
  const summaryEl = document.getElementById("cart-summary");
  if (state.cart.length === 0) {
    itemsEl.innerHTML   = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div>Tu carrito está vacío</div>`;
    summaryEl.innerHTML = "";
    return;
  }
  itemsEl.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div style="flex:1">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">+$${fmt(item.price)}</div>
      </div>
      <div class="cart-qty-controls">
        <button class="qty-btn" onclick="cartRemove('${item.name}')">−</button>
        <span style="font-weight:800;font-size:12px;width:14px;text-align:center">${item.qty}</span>
        <button class="qty-btn" onclick="cartAdd('${item.name}',${item.price},'${item.emoji}')">+</button>
      </div>
    </div>`).join("");
  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  summaryEl.innerHTML = `
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Subtotal</span><span>$${fmt(subtotal)}</span></div>
      <div class="cart-summary-row"><span>Envío</span><span>$3.500</span></div>
      <div class="cart-summary-row"><span>Servicio</span><span>$1.000</span></div>
      <div class="cart-total-row"><span>Total</span><span class="cart-total-amount">$${fmt(subtotal+4500)}</span></div>
    </div>
    <button class="btn-primary">Realizar pedido 🌾</button>`;
}

/* Router */

function renderMain() {
  const main = document.getElementById("main-content");
  if (state.currentView === "product")  { main.innerHTML = buildProductDetail(state.selectedProduct);  return; }
  if (state.currentView === "producer") { main.innerHTML = buildProducerProfile(state.selectedProducer); return; }
  const views = [buildDashboard, buildOrders, buildFavorites, buildAllProducers, buildMessages, buildHistory, buildSettings];
  main.innerHTML = (views[state.activeNav] || buildDashboard)();
}

function goTo(view, data = null) {
  state.currentView = view;
  if (view === "product")  { state.selectedProduct  = data; state.activeTab = "info"; state.detailQty = data.minOrder; }
  if (view === "producer") { state.selectedProducer = data; state.activeTab = "products"; }
  renderMain();
}

/* Dashboard */

function buildDashboard() {
  const list  = filteredProducts();
  const label = state.activeCategory === -1 ? "Productos Destacados" : `${categories[state.activeCategory].icon} ${categories[state.activeCategory].label}`;
  return `
    <div class="dash-header">
      <div>
        <div style="font-size:20px;font-weight:900;color:#1a3a1a">¡Hola, Pedro Sanchez de la Rosa de San Marcos! 👋</div>
        <div style="font-size:13px;color:#7a9a7a;font-weight:600">¿Qué producto del campo buscas hoy?</div>
      </div>
      <div class="dash-header-actions">
        <div class="search-bar">
          <span>🔍</span>
          <input id="search-input" placeholder="Buscar productos..." value="${state.searchQuery}" oninput="onSearch(this.value)"/>
        </div>
        <div class="dash-notif-btn">🔔</div>
      </div>
    </div>

    <div class="hero-banner">
      <div class="hero-eyebrow">CAMPAÑA DEL MES</div>
      <div class="hero-title">Compra directo al<br>productor 🌿</div>
      <div class="hero-sub">Sin intermediarios · Precio justo · Producto fresco</div>
      <button class="hero-btn">Ver ofertas →</button>
    </div>

    <div class="section-header">
      <span class="section-title">Categorías</span>
      <span class="section-link" onclick="setCategory(-1)">Ver todas →</span>
    </div>
    <div class="categories-row">
      <div class="cat-pill ${state.activeCategory===-1?"active":""}" onclick="setCategory(-1)">
        <span class="cat-pill-emoji">🛒</span>Todas
      </div>
      ${categories.map((c,i) => `
        <div class="cat-pill ${state.activeCategory===i?"active":""}" onclick="setCategory(${i})">
          <span class="cat-pill-emoji">${c.icon}</span>${c.label}
        </div>`).join("")}
    </div>

    <div class="section-header">
      <span class="section-title">${label}</span>
      <span style="font-size:12px;color:#8aaa8a;font-weight:600">${list.length} productos</span>
    </div>

    ${list.length === 0
      ? `<div style="text-align:center;padding:40px 0;color:#aaa">
           <div style="font-size:40px;margin-bottom:10px">🔍</div>
           <div style="font-size:14px;font-weight:700">No hay productos en esta categoría todavía</div>
         </div>`
      : `<div class="products-grid">${list.map(p => productCardHTML(p)).join("")}</div>`}

    <div class="section-header" style="margin-top:28px">
      <span class="section-title">Productores Destacados</span>
      <span class="section-link" onclick="setNav(3)">Ver todos →</span>
    </div>
    <div class="producers-grid">
      ${producers.slice(0,3).map(pr => producerCardHTML(pr)).join("")}
    </div>`;
}

function onSearch(val) {
  state.searchQuery = val;
  const grid = document.querySelector(".products-grid");
  if (!grid) return;
  const list = filteredProducts();
  grid.innerHTML = list.length === 0
    ? `<div style="grid-column:1/-1;text-align:center;padding:40px 0;color:#aaa">
         <div style="font-size:40px;margin-bottom:10px">🔍</div>
         <div style="font-size:14px;font-weight:700">Sin resultados para "${val}"</div>
       </div>`
    : list.map(p => productCardHTML(p)).join("");
}

function setCategory(i) {
  state.activeCategory = i;
  renderMain();
}

/* Tarjeta de producto */
function productCardHTML(p) {
  return `
    <div class="product-card" onclick="goTo('product', products.find(x=>x.id===${p.id}))">
      <div class="product-card-img" style="background:${p.color}">
        ${p.emoji}
        ${p.badge ? `<span class="badge badge-abs">${p.badge}</span>` : ""}
      </div>
      <div class="product-card-body">
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-farmer">👨‍🌾 ${p.farmer} · ${p.location}</div>
        <div class="product-card-stars">${stars(p.rating)} <span style="color:#aaa">(${p.reviews})</span></div>
        <div class="product-card-footer">
          <div>
            <span class="product-price">$${fmt(p.price)}</span>
            <span class="product-unit">/${p.unit}</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation();cartAdd('${p.name}',${p.price},'${p.emoji}')">+</button>
        </div>
      </div>
    </div>`;
}

/* Tarjeta de productor */
function producerCardHTML(pr) {
  return `
    <div class="producer-card" onclick="goTo('producer', producers.find(x=>x.id===${pr.id}))">
      <div class="producer-card-top">
        <div class="producer-avatar" style="background:${pr.cover}">${pr.avatar}</div>
        <div>
          <div class="producer-card-name">${pr.name}</div>
          <div class="producer-card-loc">📍 ${pr.location}</div>
        </div>
        ${pr.verified ? '<span style="margin-left:auto;font-size:18px">✅</span>' : ""}
      </div>
      <div class="producer-stats">
        <div class="stat-box"><div class="stat-box-value">⭐ ${pr.rating}</div><div class="stat-box-label">Rating</div></div>
        <div class="stat-box"><div class="stat-box-value">${pr.sales}</div><div class="stat-box-label">Ventas</div></div>
      </div>
    </div>`;
}

/* Pedidos */

function buildOrders() {
  const orders = [
    { id:"#A-001", date:"02 May 2025", status:"Entregado", sColor:"#27ae60", items:"Tomate Chonto × 2, Papa Criolla × 5", total:18900 },
    { id:"#A-002", date:"28 Abr 2025", status:"En camino", sColor:"#f39c12", items:"Aguacate Hass × 3",                    total:14400 },
    { id:"#A-003", date:"20 Abr 2025", status:"Entregado", sColor:"#27ae60", items:"Miel de Abeja × 1, Fresas × 2",        total:29000 },
    { id:"#A-004", date:"10 Abr 2025", status:"Cancelado", sColor:"#e74c3c", items:"Maíz Amarillo × 10",                   total:18000 },
  ];
  return `
    <div style="font-size:20px;font-weight:900;color:#1a3a1a;margin-bottom:6px">📦 Mis Pedidos</div>
    <div style="font-size:13px;color:#7a9a7a;font-weight:600;margin-bottom:24px">Historial de compras recientes</div>
    <div style="display:flex;flex-direction:column;gap:14px">
      ${orders.map(o => `
        <div style="background:#fff;border-radius:20px;padding:20px;box-shadow:0 2px 10px #0001;
                    display:flex;align-items:center;gap:18px;cursor:pointer;transition:box-shadow .2s"
             onmouseover="this.style.boxShadow='0 8px 24px #0002'"
             onmouseout ="this.style.boxShadow='0 2px 10px #0001'">
          <div style="width:50px;height:50px;background:#f0f7f0;border-radius:16px;
                      display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">🧺</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
              <span style="font-weight:900;font-size:15px;color:#1a3a1a">${o.id}</span>
              <span style="background:${o.sColor}22;color:${o.sColor};border-radius:20px;padding:3px 10px;font-size:11px;font-weight:800">${o.status}</span>
            </div>
            <div style="font-size:12px;color:#8aaa8a;margin-bottom:4px">${o.items}</div>
            <div style="font-size:11px;color:#aaa">📅 ${o.date}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:900;font-size:16px;color:#1e6b1e">$${fmt(o.total)}</div>
            <div style="font-size:11px;color:#aaa">total</div>
          </div>
        </div>`).join("")}
    </div>`;
}

/* Favoritos */

function buildFavorites() {
  const favs = products.filter(p => [1,3,6].includes(p.id));
  return `
    <div style="font-size:20px;font-weight:900;color:#1a3a1a;margin-bottom:6px">❤️ Favoritos</div>
    <div style="font-size:13px;color:#7a9a7a;font-weight:600;margin-bottom:24px">Productos que guardaste</div>
    <div class="products-grid">
      ${favs.map(p => `
        <div class="product-card" onclick="goTo('product', products.find(x=>x.id===${p.id}))">
          <div class="product-card-img" style="background:${p.color}">
            ${p.emoji}
            <span style="position:absolute;top:8px;right:8px;font-size:18px">❤️</span>
            ${p.badge ? `<span class="badge badge-abs">${p.badge}</span>` : ""}
          </div>
          <div class="product-card-body">
            <div class="product-card-name">${p.name}</div>
            <div class="product-card-farmer">👨‍🌾 ${p.farmer} · ${p.location}</div>
            <div class="product-card-stars">${stars(p.rating)} <span style="color:#aaa">(${p.reviews})</span></div>
            <div class="product-card-footer">
              <div><span class="product-price">$${fmt(p.price)}</span><span class="product-unit">/${p.unit}</span></div>
              <button class="add-btn" onclick="event.stopPropagation();cartAdd('${p.name}',${p.price},'${p.emoji}')">+</button>
            </div>
          </div>
        </div>`).join("")}
    </div>`;
}

/* Productores */

function buildAllProducers() {
  return `
    <div style="font-size:20px;font-weight:900;color:#1a3a1a;margin-bottom:6px">👨‍🌾 Productores</div>
    <div style="font-size:13px;color:#7a9a7a;font-weight:600;margin-bottom:24px">Conoce a quienes cultivan tus alimentos</div>
    <div class="producers-grid">
      ${producers.map(pr => `
        <div class="producer-card" onclick="goTo('producer', producers.find(x=>x.id===${pr.id}))">
          <div class="producer-card-top">
            <div class="producer-avatar" style="background:${pr.cover};font-size:30px">${pr.avatar}</div>
            <div>
              <div class="producer-card-name">${pr.name}</div>
              <div class="producer-card-loc">📍 ${pr.location}</div>
              <div style="font-size:11px;color:#3a9e3a;font-weight:700;margin-top:2px">🌿 ${pr.specialty}</div>
            </div>
            ${pr.verified ? '<span style="margin-left:auto;font-size:20px">✅</span>' : ""}
          </div>
          <div class="producer-stats">
            <div class="stat-box"><div class="stat-box-value">⭐ ${pr.rating}</div><div class="stat-box-label">Rating</div></div>
            <div class="stat-box"><div class="stat-box-value">${pr.sales}</div><div class="stat-box-label">Ventas</div></div>
            <div class="stat-box"><div class="stat-box-value">${pr.joined}</div><div class="stat-box-label">Desde</div></div>
          </div>
        </div>`).join("")}
    </div>`;
}

/* Mensajes */

function buildMessages() {
  const chats = [
    { name:"Luis Pérez",  avatar:"👨‍🌾", last:"Claro, el pedido sale mañana temprano!",       time:"10:32", unread:2, cover:"#d4edda" },
    { name:"Rosa Gómez",  avatar:"👩‍🌾", last:"¿Cuántos kilos de papa necesitas?",             time:"Ayer",  unread:0, cover:"#fff3cd" },
    { name:"Carlos Ruiz", avatar:"🧑‍🌾", last:"Los aguacates ya están en punto de madurez",  time:"Lun",   unread:1, cover:"#e6f4ea" },
    { name:"Gloria Mora", avatar:"👩‍🌾", last:"Tengo nuevo lote de miel disponible 🍯",       time:"Dom",   unread:0, cover:"#fff3cd" },
  ];
  return `
    <div style="font-size:20px;font-weight:900;color:#1a3a1a;margin-bottom:6px">💬 Mensajes</div>
    <div style="font-size:13px;color:#7a9a7a;font-weight:600;margin-bottom:24px">Chats con productores</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${chats.map(c => `
        <div style="background:#fff;border-radius:18px;padding:16px 18px;display:flex;align-items:center;
                    gap:14px;cursor:pointer;box-shadow:0 2px 8px #0001;transition:transform .2s"
             onmouseover="this.style.transform='translateX(4px)'"
             onmouseout ="this.style.transform='none'">
          <div style="width:50px;height:50px;background:${c.cover};border-radius:16px;
                      display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">${c.avatar}</div>
          <div style="flex:1">
            <div style="font-weight:800;font-size:14px;color:#1a3a1a">${c.name}</div>
            <div style="font-size:12px;color:#8aaa8a;margin-top:2px">${c.last}</div>
          </div>
          <div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:6px">
            <span style="font-size:11px;color:#aaa">${c.time}</span>
            ${c.unread > 0 ? `<span style="background:linear-gradient(135deg,#3a9e3a,#27ae60);color:#fff;
              border-radius:50%;width:20px;height:20px;display:flex;align-items:center;
              justify-content:center;font-size:11px;font-weight:800">${c.unread}</span>` : ""}
          </div>
        </div>`).join("")}
    </div>`;
}

/* Historial */

function buildHistory() {
  const months = [
    { month:"Mayo 2025",  total:87400, orders:3, saved:32000 },
    { month:"Abril 2025", total:65200, orders:5, saved:24500 },
    { month:"Marzo 2025", total:91800, orders:4, saved:38000 },
  ];
  return `
    <div style="font-size:20px;font-weight:900;color:#1a3a1a;margin-bottom:6px">📊 Historial</div>
    <div style="font-size:13px;color:#7a9a7a;font-weight:600;margin-bottom:24px">Resumen de tus compras</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px">
      ${[["💰","$244.400","Total gastado"],["🛒","12","Pedidos"],["💚","$94.500","Ahorrado vs supermercado"]].map(([ic,v,l]) => `
        <div style="background:#fff;border-radius:20px;padding:20px;text-align:center;box-shadow:0 2px 10px #0001">
          <div style="font-size:28px;margin-bottom:8px">${ic}</div>
          <div style="font-weight:900;font-size:22px;color:#1e6b1e">${v}</div>
          <div style="font-size:12px;color:#8aaa8a;margin-top:4px">${l}</div>
        </div>`).join("")}
    </div>
    <div style="font-weight:900;font-size:15px;color:#1a3a1a;margin-bottom:14px">Por mes</div>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${months.map(m => `
        <div style="background:#fff;border-radius:18px;padding:18px 20px;display:flex;align-items:center;gap:16px;box-shadow:0 2px 8px #0001">
          <div style="width:48px;height:48px;background:#e8f5e8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px">📅</div>
          <div style="flex:1">
            <div style="font-weight:800;font-size:14px;color:#1a3a1a">${m.month}</div>
            <div style="font-size:12px;color:#8aaa8a">${m.orders} pedidos · Ahorrado: <span style="color:#27ae60;font-weight:700">$${fmt(m.saved)}</span></div>
          </div>
          <div style="font-weight:900;font-size:17px;color:#1e6b1e">$${fmt(m.total)}</div>
        </div>`).join("")}
    </div>`;
}

/* Ajustes */

function buildSettings() {
  const sections = [
    { title:"Cuenta",      items:[["👤","Datos personales","Pedro Sanchez de la Rosa de San Marcos · pedritosanchez"],["📍","Dirección de entrega","Cra 15 # 23-45, Bogotá"],["🔔","Notificaciones","Activadas"]] },
    { title:"Pagos",       items:[["💳","Métodos de pago","PSE · Nequi"],["🧾","Facturación","Persona natural"]] },
    { title:"Aplicación",  items:[["🌍","Idioma","Español"],["🎨","Tema","Claro"],["❓","Ayuda","Centro de soporte"],["🚪","Cerrar sesión",""]] },
  ];
  return `
    <div style="font-size:20px;font-weight:900;color:#1a3a1a;margin-bottom:6px">⚙️ Ajustes</div>
    <div style="font-size:13px;color:#7a9a7a;font-weight:600;margin-bottom:24px">Preferencias de tu cuenta</div>
    <div style="background:#fff;border-radius:20px;padding:20px;box-shadow:0 2px 10px #0001;margin-bottom:20px;display:flex;align-items:center;gap:16px">
      <div style="width:64px;height:64px;background:linear-gradient(135deg,#3a9e3a,#27ae60);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:32px">👤</div>
      <div>
        <div style="font-weight:900;font-size:18px;color:#1a3a1a">Pedro Sanchez de la Rosa de San Marcos</div>
        <div style="font-size:13px;color:#8aaa8a">@pedritosanchez · Cliente desde 2023</div>
        <div style="margin-top:6px"><span class="green-tag">✅ Cuenta verificada</span></div>
      </div>
    </div>
    ${sections.map(sec => `
      <div style="font-weight:800;font-size:13px;color:#8aaa8a;letter-spacing:1px;margin-bottom:10px;margin-top:20px">${sec.title.toUpperCase()}</div>
      <div style="background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 2px 8px #0001">
        ${sec.items.map((item, idx) => `
          <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;
                      ${idx < sec.items.length-1 ? "border-bottom:1px solid #f0f7f0" : ""};
                      cursor:pointer;transition:background .15s"
               onmouseover="this.style.background='#f9fdf9'"
               onmouseout ="this.style.background='transparent'">
            <span style="font-size:20px;width:28px;text-align:center">${item[0]}</span>
            <span style="flex:1;font-weight:700;font-size:14px;color:#1a3a1a">${item[1]}</span>
            <span style="font-size:12px;color:#8aaa8a">${item[2]}</span>
            <span style="color:#ccc;font-size:16px">›</span>
          </div>`).join("")}
      </div>`).join("")}`;
}

/* Detalle del producto */

function buildProductDetail(p) {
  const producer = producers.find(pr => pr.id === p.farmerId);
  const tabContent = () => {
    if (state.activeTab === "info")
      return `<div class="tab-content">${p.description}</div>`;
    if (state.activeTab === "details")
      return `<div class="details-grid">${p.details.map(d => `<div class="detail-tag">✅ ${d}</div>`).join("")}</div>`;
    return `<div class="reviews-list">${reviewsData.map(r => `
      <div class="review-card">
        <div class="review-card-header"><span class="review-user">${r.user}</span><span class="review-date">${r.date}</span></div>
        <div class="review-stars">${"★".repeat(r.rating)}</div>
        <div class="review-text">${r.comment}</div>
      </div>`).join("")}</div>`;
  };
  return `
    <button class="btn-back" onclick="goTo('dashboard')">← Volver al catálogo</button>
    <div class="detail-grid">
      <div>
        <div class="detail-img-box" style="background:${p.color}">
          ${p.emoji}
          ${p.badge ? `<span class="badge badge-abs" style="font-size:13px">${p.badge}</span>` : ""}
        </div>
        ${producer ? `
        <div class="detail-producer-card" onclick="goTo('producer', producers.find(x=>x.id===${producer.id}))">
          <div class="detail-producer-label">VENDIDO POR</div>
          <div class="detail-producer-inner">
            <div class="detail-producer-avatar" style="background:${producer.cover}">${producer.avatar}</div>
            <div style="flex:1">
              <div style="font-weight:800;font-size:14px;color:#1a3a1a">${producer.name} ${producer.verified?"✅":""}</div>
              <div style="font-size:12px;color:#8aaa8a">📍 ${producer.location}</div>
              <div style="font-size:12px;color:#f4a900">⭐ ${producer.rating} · ${producer.sales} ventas</div>
            </div>
            <span style="font-size:12px;color:#3a9e3a;font-weight:700">Ver perfil →</span>
          </div>
        </div>` : ""}
      </div>
      <div>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px">
          <div class="detail-title">${p.name}</div>
          <button style="background:none;border:none;font-size:22px;cursor:pointer">❤️</button>
        </div>
        <div class="detail-meta">${stars(p.rating)} <strong style="color:#1a3a1a">${p.rating}</strong> · ${p.reviews} reseñas · 📍 ${p.location}</div>
        <div class="detail-price">$${fmt(p.price)}<span style="font-family:'Nunito',sans-serif;font-size:14px;font-weight:600;color:#8aaa8a">/${p.unit}</span></div>
        <div class="detail-stock">Stock: <strong style="color:#1a3a1a">${p.stock} ${p.unit}</strong> · Mínimo: <strong style="color:#1a3a1a">${p.minOrder} ${p.unit}</strong></div>
        <div class="tabs-row">
          <button class="tab-btn ${state.activeTab==="info"?"active":""}"    onclick="setTab('info')">Información</button>
          <button class="tab-btn ${state.activeTab==="details"?"active":""}" onclick="setTab('details')">Características</button>
          <button class="tab-btn ${state.activeTab==="reviews"?"active":""}" onclick="setTab('reviews')">Reseñas</button>
        </div>
        <div id="tab-content-area">${tabContent()}</div>
        <div class="add-to-cart-row">
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
            <span class="qty-display" id="detail-qty">${state.detailQty}</span>
            <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
          </div>
          <span class="qty-total" id="detail-total">= <strong style="color:#1e6b1e">$${fmt(p.price*state.detailQty)}</strong></span>
          <button class="btn-add-cart" onclick="cartAdd('${p.name}',${p.price},'${p.emoji}',${state.detailQty});this.textContent='✅ Agregado!'">
            Agregar al pedido 🛒
          </button>
        </div>
      </div>
    </div>`;
}

function setTab(tab) {
  state.activeTab = tab;
  const p    = state.selectedProduct;
  const area = document.getElementById("tab-content-area");
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active",
      (tab==="info"    && b.textContent.trim()==="Información") ||
      (tab==="details" && b.textContent.trim()==="Características") ||
      (tab==="reviews" && b.textContent.trim()==="Reseñas"));
  });
  if (!area) return;
  if (tab === "info")
    area.innerHTML = `<div class="tab-content">${p.description}</div>`;
  else if (tab === "details")
    area.innerHTML = `<div class="details-grid">${p.details.map(d=>`<div class="detail-tag">✅ ${d}</div>`).join("")}</div>`;
  else
    area.innerHTML = `<div class="reviews-list">${reviewsData.map(r=>`
      <div class="review-card">
        <div class="review-card-header"><span class="review-user">${r.user}</span><span class="review-date">${r.date}</span></div>
        <div class="review-stars">${"★".repeat(r.rating)}</div>
        <div class="review-text">${r.comment}</div>
      </div>`).join("")}</div>`;
}

function changeDetailQty(delta) {
  const p = state.selectedProduct;
  state.detailQty = Math.max(p.minOrder, state.detailQty + delta);
  const qEl = document.getElementById("detail-qty");
  const tEl = document.getElementById("detail-total");
  if (qEl) qEl.textContent = state.detailQty;
  if (tEl) tEl.innerHTML   = `= <strong style="color:#1e6b1e">$${fmt(p.price*state.detailQty)}</strong>`;
}

/* Perfil del productor */

function buildProducerProfile(pr) {
  const producerProducts = products.filter(p => p.farmerId === pr.id);
  const tabContent = () => {
    if (state.activeTab === "products")
      return `<div class="products-grid">${producerProducts.map(p => productCardHTML(p)).join("")}</div>`;
    if (state.activeTab === "info")
      return `<div class="profile-info-cards">${[
        ["🌍","Ubicación exacta","Vereda El Paraíso"],
        ["🚚","Tiempo de entrega","24-48 horas"],
        ["📦","Pedido mínimo","Desde 2 kg"],
        ["✅","Certificaciones","Orgánico · INVIMA"],
        ["💳","Formas de pago","PSE · Nequi · Efectivo"],
        ["🌱","Tipo de cultivo","Tradicional sostenible"],
      ].map(([ic,t,v]) => `<div class="info-card"><div class="info-card-icon">${ic}</div><div class="info-card-label">${t}</div><div class="info-card-value">${v}</div></div>`).join("")}</div>`;
    return `<div class="reviews-list">${reviewsData.map(r => `
      <div class="review-card">
        <div class="review-card-header"><span class="review-user">${r.user}</span><span class="review-date">${r.date}</span></div>
        <div class="review-stars">${"★".repeat(r.rating)}</div>
        <div class="review-text">${r.comment}</div>
      </div>`).join("")}</div>`;
  };
  return `
    <button class="btn-back" onclick="goTo('dashboard')">← Volver</button>
    <div class="profile-cover" style="background:linear-gradient(135deg,${pr.cover},#a8d5a8)">
      <div class="profile-avatar">${pr.avatar}</div>
      ${pr.verified ? `<div class="profile-verified-badge">✅ Productor Verificado</div>` : ""}
    </div>
    <div class="profile-info-grid">
      <div>
        <div class="profile-name">${pr.name}</div>
        <div class="profile-meta">📍 ${pr.location} · 🌿 ${pr.specialty} · Miembro desde ${pr.joined}</div>
        <div class="profile-bio">${pr.bio}</div>
      </div>
      <div class="profile-stats-col">
        ${[["⭐",pr.rating,"Rating"],["🛒",pr.sales,"Ventas"],["📦",producerProducts.length,"Productos"]].map(([ic,v,l]) => `
          <div class="stat-box-row">
            <span style="font-size:22px">${ic}</span>
            <div><div class="stat-box-row-value">${v}</div><div class="stat-box-row-label">${l}</div></div>
          </div>`).join("")}
      </div>
    </div>
    <div class="profile-actions">
      <button style="padding:11px 20px;border:none;border-radius:14px;background:linear-gradient(135deg,#3a9e3a,#27ae60);color:#fff;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;cursor:pointer">💬 Enviar mensaje</button>
      <button class="btn-secondary">📞 Contactar</button>
      <button class="btn-secondary">❤️ Seguir</button>
    </div>
    <div class="tabs-row">
      <button class="tab-btn ${state.activeTab==="products"?"active":""}" onclick="setProducerTab('products')">Productos</button>
      <button class="tab-btn ${state.activeTab==="info"    ?"active":""}" onclick="setProducerTab('info')">Sobre la finca</button>
      <button class="tab-btn ${state.activeTab==="reviews" ?"active":""}" onclick="setProducerTab('reviews')">Reseñas</button>
    </div>
    <div id="producer-tab-area">${tabContent()}</div>`;
}

function setProducerTab(tab) {
  state.activeTab = tab;
  renderMain();
}

/* Init */
render();