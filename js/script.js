const products = [
  {
    id: 1,
    name: "Digestive Care Juice",
    category: "Health Care",
    image: "images/products/1.png",
    description: "Kaya’s Digestive care: Start your day with a sip of Digestive Care Drink, which is carefully crafted with natural ingredients like apple cider vinegar, honey, and ginger, designed to support your digestive wellness and overall health. Rich in antioxidants and probiotics, this refreshing drink helps to soothe indigestion, reduce bloating, and promote a healthy gut environment.Whether you're looking to enhance your digestion, manage your weight, or simply feel more energized, this drink is the perfect daily addition to your wellness routine.",
    offer: "",
    discountPercent: 3,
    variants: [
      { label: "250ml", price: 399, mrp: 599 },
      { label: "500ml", price: 799, mrp: 999 },
      { label: "1000ml", price: 1599, mrp: 1699 }
    ],
    fullscreenView: true
  },
  {
    id: 2,
    name: "Extra Virgin Coconut Oil",
    category: "Hair Care",
    image: "images/products/2.png",
    description: "Experience the purity and power of Kaya's Extra Virgin Coconut Oil, produced using the fermentation process to retain the highest quality of nutrients, extracted from the heart of fresh coconuts. Our meticulous production process ensures the preservation of essential nutrients and natural antioxidants, making it a superfood you can't afford to miss.",
    offer: "",
    discountPercent: 5,
    variants: [
      { label: "250ml", price: 349, mrp: 499 }
    ],
    fullscreenView: true
  },
  {
    id: 3,
    name: "Seeraga Mittai",
    category: "Health Care",
    image: "images/products/3.png",
    description: "Kaya’s Seeraga Mittaai are delightful little candies which are more than just a sweet treat. Packed with the goodness of cumin seeds and coated in pure Jaggery, they offer a delicious way to support your digestive health after a satisfying meal. The refreshing taste will leave your breath feeling clean. Enjoyed for generations, Seeraga Mittaai offers a time-tested way to promote digestive well-being.",
    offer: "",
    discountPercent: 0,
    variants: [{ label: "150g", price: 189, mrp: 249 }],
    fullscreenView: true
  },
  {
    id: 4,
    name: "Eco Scrub",
    category: "Home Care",
    image: "images/products/4.png",
    description: "Kaya’s Eco Scrub is your go-to solution for a spotless, chemical-free home. Made from eco-friendly and biodegradable materials, this powerful scrubber effectively removes tough stains, grease, and grime — all while being gentle on surfaces and safe for your family. Whether you're tackling the kitchen, bathroom, or utensils, Kaya’s Eco Scrub does the job without harming the environment. Durable, reusable, and plastic-free — it's the perfect addition to a sustainable lifestyle.",
    offer: "",
    discountPercent: 10,
    variants: [{ label: "50g", price: 149, mrp: 199 }],
    fullscreenView: true
  },
  {
    id: 5,
    name: "Natural Honey",
    category: "Health Care",
    image: "images/products/5.png",
    description: "Enjoy the raw, unadulterated sweetness of Kaya's 100% Pure Honey. Sourced directly from the beekeepers of the Annaikatti forest region, our honey is extracted straight from the hive and packaged without any additives.",
    offer: "",
    discountPercent: 0,
    variants: [{ label: "300ml", price: 210, mrp: 299 },
               { label: "600ml", price: 380, mrp: 449 }
    ],
    fullscreenView: true
  },
  {
    id: 6,
    name: "Karupu Kollu Idli Podi",
    category: "Health Care",
    image: "images/products/6.png",
    description: "Kaya’s Karuppu Kollu Idli Podi is a unique blend of roasted black gram, spices, and other carefully selected ingredients. This versatile seasoning adds a delicious depth of flavor and a host of health benefits to your idli, dosa, and other dishes. Sprinkle generously; mix with ghee or oil for added flavor. Can be used as a seasoning for various dishes.",
    offer: "",
    discountPercent: 0,
    variants: [{ label: "100g", price: 84, mrp: 149 }],
    fullscreenView: true
  },
  {
    id: 7,
    name: "Weight Loss Mix",
    category: "Health Care",
    image: "images/products/7.png",
    description: " Kaya's Weight Loss Soup Mix: A Delicious and Nutritious Way to Shed those Extra Pounds. Our carefully crafted soup mix is a blend of natural ingredients designed to support your weight loss journey. Packed with essential vitamins, minerals, and fibre, it offers a delicious and satisfying way without compromising on taste.",
    offer: "LIMITED OFFER",
    discountPercent: 2,
    variants: [{ label: "100g", price: 149, mrp: 182 }],
    fullscreenView: true
  },
  {
    id: 8,
    name: "Mudavattukaal Kizhangu Soup mix",
    category: "Health Care",
    image: "images/products/8.png",
    description: "Discover the wholesome power of Mudvaattukaal Kizhangu with Kaya’s authentic soup mix. Carefully curated using time-honored recipes, this nutritious blend supports body strength, bone health, and natural vitality. Perfect for daily consumption by all age groups, especially growing children and elders.",
    offer: "",
    discountPercent: 0,
    variants: [{ label: "50g", price: 349, mrp: 449 }],
    fullscreenView: true
  },
  {
    id: 9,
    name: "Murunga Keerai Idli Podi",
    category: "Health Care",
    image: "images/products/9.png",
    description: "Kaya’s Murungai Keerai Idli Podi is a unique blend of aromatic drumstick leaves and other carefully selected spices. This versatile seasoning adds a delicious depth of flavor and a host of health benefits to your idli, dosa, and other dishes. Sprinkle generously; mix with ghee or oil for added flavor. Can be used as a seasoning for various dishes.",
    offer: "",
    discountPercent: 0,
    variants: [{ label: "100g", price: 85, mrp: 149 }],
    fullscreenView: true
  },
  {  
    id: 10,
    name: "Gulkand",
    category: "Health Care",
    image: "images/products/10.png",
    description: "Savor the rich taste of Kaya’s Gulkand, a traditional Indian sweet made from rose petals and Jaggery. This delectable treat offers a harmonious blend of sweetness and floral notes, making it a perfect addition to your daily routine. Beyond its delightful taste, Gulkand boasts numerous health benefits, including aiding digestion, soothing the stomach, and providing antioxidant protection. Experience the pure, natural goodness of Kaya's Gulkand and discover the transformative power of this traditional delicacy.",
    offer: "",
    discountPercent: 0,
    variants: [{ label: "100g", price: 149, mrp: 199 }],
    fullscreenView: true
  }
];
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
function calculateDeliveryCharge() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalQuantity === 0) return 0;
  return 40 + (totalQuantity - 1) * 15;
}
const VALID_COUPONS = {
  KAYAS10: { type: "flat", discount: 10, minSubtotal: 0 },
  KAYAS50: { type: "flat", discount: 50, minSubtotal: 500 },
};
function closeCouponModal() {
  document.getElementById("couponModal").style.display = "none";
}

function renderCouponModal() {
  const container = document.getElementById("couponModalContent");
  container.innerHTML = "";

  Object.entries(VALID_COUPONS).forEach(([code, { discount, minSubtotal }]) => {
    const item = document.createElement("div");
    item.className = "coupon-option";
    item.innerHTML = `
      <code>${code}</code> - ₹${discount} off on orders ₹${minSubtotal}+
      <button onclick="applyCouponFromPopup('${code}')">Apply</button>
    `;
    container.appendChild(item);
  });
}
function applyCouponFromPopup(code) {
  couponInput.value = code;
  closeCouponModal();
  applyCoupon();
}
const selectedVariants = {};
let cart = [];
let appliedDiscount = 0;
let appliedCoupon = "";
function loadCart() {
  const stored = localStorage.getItem("cart");
  if (stored) cart = JSON.parse(stored);
}
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function renderProducts() {
  const keyword = searchInput?.value.toLowerCase() || "";
  const category = categoryFilter?.value || "all";
  productList.innerHTML = "";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) &&
    (category === "all" || p.category === category)
  );
  if (filtered.length === 0) {
  productList.innerHTML = `
    <div class="no-products">
      <p>⚠️ No products found. Try changing the category or search keyword.</p>
    </div>
  `;
  return;
}
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    selectedVariants[p.id] = 0;
    const variantButtons = p.variants.map((variant, i) =>
  `<button class="variant-btn" data-product-id="${p.id}" data-variant-index="${i}"  aria-label="Select ${variant.label} variant for ${p.name}">
    ${variant.label}
  </button>`
).join("");


    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy"
  onclick="${p.fullscreenView ? `openQuickView(${p.id})` : ''}">
      <h3>${p.name}</h3>
<p class="variant-hint">(Click the image to know more)</p>
<div class="variant-buttons">${variantButtons}</div>
<div class="variant-footer">
  <span class="variant-price" id="price-${p.id}">
  ₹${p.variants[0].price.toLocaleString("en-IN")}
  <span class="mrp">₹${p.variants[0].mrp.toLocaleString("en-IN")}</span>
</span>
  <button class="add-cart-btn" id="add-btn-${p.id}" data-product-id="${p.id}" aria-label="Add ${p.name} to cart">
  <i class="fas fa-shopping-cart" aria-hidden="true"></i>  Buy Now
</button>
</div>
    `;

    productList.appendChild(card);
  });

  // 🔁 Setup click listeners for newly rendered products
  setupVariantSelection();
}
function setupVariantSelection() {
  const variantBtns = document.querySelectorAll(".variant-btn");

  variantBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const productId = parseInt(btn.getAttribute("data-product-id"));
    const variantIndex = parseInt(btn.getAttribute("data-variant-index"));
    selectedVariants[productId] = variantIndex;

    // Remove "selected" class from all variants of this product
    document.querySelectorAll(`.variant-btn[data-product-id="${productId}"]`).forEach(b => {
      b.classList.remove("selected");
    });

    // Add "selected" class to the clicked one
    btn.classList.add("selected");

    // Show the "Add to Cart" button and price
    const addBtn = document.getElementById(`add-btn-${productId}`);
    const priceTag = document.getElementById(`price-${productId}`);
    const product = products.find(p => p.id === productId);
    const variant = product.variants[variantIndex];

    if (addBtn && priceTag) {
      addBtn.style.display = "inline-block";
      priceTag.innerHTML = `₹${variant.price.toLocaleString("en-IN")} <span class="mrp">₹${variant.mrp.toLocaleString("en-IN")}</span>`;
    }
  });
});

  const addCartBtns = document.querySelectorAll(".add-cart-btn");
  addCartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("data-product-id"));
      const variantIndex = selectedVariants[productId];

      if (variantIndex !== undefined) {
        addToCart(productId, variantIndex);

        // 👉 Open cart drawer
        cartDrawer.classList.add("open");

        // 👉 Close it automatically after 3.5 seconds
        setTimeout(() => {
          cartDrawer.classList.remove("open");
        },);
      }
    });
  });
}
function addToCart(productId, variantIndex) {
  const product = products.find(p => p.id === productId);
  const variant = product.variants[variantIndex];
  const existing = cart.find(item => item.id === productId && item.variant.label === variant.label);
  existing ? existing.quantity++ : cart.push({ id: productId, name: product.name, image: product.image, variant, quantity: 1 });
  updateCart();
  // 👇 Open cart drawer and close after delay
  cartDrawer.classList.add("open");
  setTimeout(() => {
    cartDrawer.classList.remove("open");
  }, 3500);
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
function clearCart() {
  if (!cart.length) return alert("Cart is already empty.");
  if (confirm("Clear the cart?")) {
    cart = [];
    appliedDiscount = 0;
    appliedCoupon = "";
    localStorage.removeItem("cart");
    updateCart();
  }
}
function applyCoupon() {
  const code = couponInput.value.trim().toUpperCase();
  const coupon = VALID_COUPONS[code];
  
  const subtotal = cart.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);

  if (coupon) {
    if (subtotal >= coupon.minSubtotal) {
      appliedCoupon = code;
      appliedDiscount = coupon.discount;

      couponInput.disabled = true;
      applyBtn.disabled = true;
      applyBtn.textContent = `Coupon Applied - ₹${appliedDiscount}`;
      removeBtn.style.display = "inline-block";

      alert(`Coupon "${code}" applied! ₹${appliedDiscount} off.`);
    } else {
      alert(`Minimum order amount for ${code} is ₹${coupon.minSubtotal}.`);
      appliedCoupon = "";
      appliedDiscount = 0;
    }
  } else {
    alert("Invalid coupon code.");
    appliedCoupon = "";
    appliedDiscount = 0;
  }

  // Always update appearance
  if (!appliedCoupon) {
    couponInput.disabled = false;
    applyBtn.disabled = false;
    applyBtn.textContent = "Apply Coupon";
    removeBtn.style.display = "none";
  } 
  updateCart();
}
function removeCoupon() {
  appliedCoupon = "";
  appliedDiscount = 0;
  couponInput.disabled = false;
  applyBtn.disabled = false;
  applyBtn.textContent = "Apply Coupon";
  removeBtn.style.display = "none";
  couponInput.value = "";
  updateCart();
}
function updateCart() {
  saveCart();
  cartItems.innerHTML = "";
  let subtotal = 0;
  cart.forEach((item, index) => {
  const total = item.variant.price * item.quantity;
  subtotal += total;
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
  <div class="cart-item-title">
    <strong>${item.name}</strong>
    <small>Variant: ${item.variant.label}</small>
  </div>
  <div class="cart-item-controls">
    <button onclick="changeQuantity(${index}, -1)">–</button>
    <span>${item.quantity}</span>
    <button onclick="changeQuantity(${index}, 1)">+</button>
    <span>₹${item.variant.price * item.quantity}</span>
    <button onclick="removeFromCart(${index})">✖</button>
  </div>
`;

    cartItems.appendChild(itemDiv);
  });
  // 🔁 Revalidate applied coupon
if (appliedCoupon) {
  const coupon = VALID_COUPONS[appliedCoupon];
  if (!coupon || subtotal < coupon.minSubtotal) {
    alert(`⚠️ Coupon "${appliedCoupon}" removed as subtotal dropped below ₹${coupon.minSubtotal}.`);
    appliedCoupon = "";
    appliedDiscount = 0;
    couponInput.disabled = false;
    applyBtn.disabled = false;
    applyBtn.textContent = "Apply Coupon";
  }
}
  cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
  const deliveryCharge = calculateDeliveryCharge();
const finalTotal = subtotal + deliveryCharge - appliedDiscount;
  const totalsDiv = document.createElement("div");
totalsDiv.innerHTML = `
  <p><strong>Subtotal:</strong> ₹${subtotal}</p>
  <p><strong>Delivery:</strong> ₹${deliveryCharge}</p>
  ${appliedCoupon ? `<p class="coupon-applied">✅ Coupon "${appliedCoupon}" applied</p>` : ""}
  <p><strong>Total:</strong> ₹${finalTotal}</p>
`;
  cartItems.appendChild(totalsDiv);
}
function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCart();
}
function checkout() {
  if (!cart.length) return alert("Cart is empty!");
  const orderLines = cart.map(item =>
    `- ${item.name} (${item.variant.label}) x${item.quantity} = ₹${item.variant.price * item.quantity}`
  );
  const subtotal = cart.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  const deliveryCharge = calculateDeliveryCharge();
  const total = subtotal + deliveryCharge - appliedDiscount;
  const message = `🛒 *Order Details:*\n${orderLines.join("\n")}\n\nSubtotal: ₹${subtotal}\nDelivery: ₹${deliveryCharge}\nDiscount: ₹${appliedDiscount}\n\n*Total: ₹${total}*`;
  window.open(`https://wa.me/919003031324?text=${encodeURIComponent(message)}`, "_blank");
}
const couponInput = document.createElement("input");
couponInput.type = "text";
couponInput.placeholder = "Enter Coupon Code";
couponInput.style.margin = "10px 0";
couponInput.style.padding = "6px";
couponInput.style.width = "100%";
const applyBtn = document.createElement("button");
applyBtn.textContent = "Apply Coupon";
applyBtn.style.margin = "10px 0";
applyBtn.onclick = applyCoupon;
const removeBtn = document.createElement("button");
removeBtn.textContent = "✖";
removeBtn.title = "Remove Coupon";
removeBtn.style.marginLeft = "10px";
removeBtn.style.display = "none";
removeBtn.onclick = removeCoupon;
const couponList = document.createElement("div");
couponList.className = "coupon-info";
couponList.style.margin = "10px 0";
couponList.style.padding = "8px";
couponList.style.background = "#f9f9f9";
couponList.style.border = "1px dashed #ccc";
couponList.style.borderRadius = "6px";
couponList.style.fontSize = "14px";
couponList.innerHTML = `<strong>Available Coupons:</strong><br>` +
  Object.entries(VALID_COUPONS).map(([code, { discount, minSubtotal }]) => {
    return `<p style="margin: 5px 0;"><code>${code}</code> - ₹${discount} off on orders ₹${minSubtotal}+ </p>`;
  }).join("");
cartDrawer.insertBefore(couponInput, checkoutBtn);
cartDrawer.insertBefore(applyBtn, checkoutBtn);
cartDrawer.insertBefore(removeBtn, checkoutBtn);
cartDrawer.insertBefore(couponInput, checkoutBtn);
cartDrawer.insertBefore(applyBtn, checkoutBtn);
cartDrawer.insertBefore(removeBtn, checkoutBtn);

// 👇 Add View Coupons Button
const viewCouponsBtn = document.createElement("button");
viewCouponsBtn.textContent = "View Available Coupons";
viewCouponsBtn.className = "view-coupons-btn";
viewCouponsBtn.onclick = () => {
  renderCouponModal(); // ✅ Load the coupons before showing
  document.getElementById("couponModal").style.display = "flex";
};
cartDrawer.insertBefore(viewCouponsBtn, checkoutBtn);

let debounceTimeout;
searchInput?.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(renderProducts, 250);
});
categoryFilter?.addEventListener("change", renderProducts);
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  cartDrawer.classList.add("open");
});
checkoutBtn.addEventListener("click", checkout);
clearCartBtn.addEventListener("click", clearCart);
loadCart();
renderProducts();
updateCart();
document.addEventListener("DOMContentLoaded", () => {
  const reviews = [
    {
      name: "Aarthi S.",
      rating: 5,
      message: " Kaya's Digestive Juice really improved my health! 100% natural and effective."
    },
    {
      name: "Ravi Kumar",
      rating: 4,
      message: "Hair oil from Kaya is amazing. Saw results in just two weeks. Highly recommended."
    },
    {
      name: "Deepa M.",
      rating: 5,
      message: "Loved the packaging and the herbal face pack. Feels pure and refreshing!"
    },
    {
      name: "Tharun Raj",
      rating: 4,
      message: "Delivery was fast, and the product quality is top notch. Will reorder!"
    }
  ];
  const reviewList = document.getElementById("reviewList");
  reviews.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";
    const author = document.createElement("div");
    author.className = "review-author";
    author.textContent = review.name;
    const stars = document.createElement("div");
    stars.className = "review-stars";
    stars.innerHTML = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const message = document.createElement("p");
    message.className = "review-text";
    message.textContent = review.message;
    card.appendChild(author);
    card.appendChild(stars);
    card.appendChild(message);
    reviewList.appendChild(card);
  });
  const seoData = {
    title: "Kaya - Health Care Store",
    description: "Discover Kaya's quality health care products made with natural ingredients.",
    image: "https://www.kayas.co.in/logo.JPG",
    url: "https://www.kayas.co.in/",
    siteName: "Kaya Health Care",
    twitterHandle: "@kayahealthcare"
  };
  document.title = seoData.title;
  setMeta("name", "description", seoData.description);
  setMeta("name", "keywords", "health care, wellness, herbal, organic, Kaya");
  setMeta("name", "author", seoData.siteName);
  setMeta("link", "canonical", seoData.url);
  setMeta("property", "og:title", seoData.title);
  setMeta("property", "og:description", seoData.description);
  setMeta("property", "og:image", seoData.image);
  setMeta("property", "og:url", seoData.url);
  setMeta("property", "og:type", "website");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", seoData.title);
  setMeta("name", "twitter:description", seoData.description);
  setMeta("name", "twitter:image", seoData.image);
  setMeta("name", "twitter:site", seoData.twitterHandle);
  function setMeta(attr, name, content) {
    let tag;
    if (attr === "link") {
      tag = document.querySelector(`link[rel="${name}"]`);
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", content);
    } else {
      tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    }
  }
});
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};
  function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const variant = product.variants[0];
  selectedVariants[productId] = 0;
  const variantButtons = product.variants.map((v, i) =>
    `<button class="variant-btn" data-product-id="${productId}" data-variant-index="${i}" onclick="selectVariantInQuickView(${productId}, ${i})">${v.label}</button>`
  ).join("");
  document.getElementById("quickViewDetails").innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="variant-buttons">${variantButtons}</div>
    <p><strong>Price: </strong> <span id="quickViewPrice">₹${variant.price}</span>
      ${variant.mrp > variant.price ? `<span style="text-decoration:line-through; color:gray; margin-left:10px;">₹${variant.mrp}</span>` : ""}
    </p>
    <button class="quick-cart-btn" onclick="addToCart(${productId}, 0)">Add to Cart</button>
  `;
  document.getElementById("quickViewModal").style.display = "flex";
}
function closeQuickView() {
  document.getElementById("quickViewModal").style.display = "none";
}
function selectVariantInQuickView(productId, variantIndex) {
  selectedVariants[productId] = variantIndex;
  const product = products.find(p => p.id === productId);
  const variant = product.variants[variantIndex];
  document.getElementById("quickViewPrice").textContent = `₹${variant.price}`;
}
const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  setInterval(showNextSlide, 3000); // 5 seconds per slide

document.addEventListener("DOMContentLoaded", () => {
  // Prevent cart drawer from closing when interacting inside it
  document.addEventListener("click", (e) => {
    const isInsideCart = e.target.closest("#cartDrawer");
    const isCartBtn = e.target.closest("#cartBtn");

    if (!isInsideCart && !isCartBtn) {
      cartDrawer.classList.remove("open");
    }
  });

  // ⛔️ Stop propagation from buttons inside the cart (–, +, ✖)
  document.getElementById("cartDrawer").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
      e.stopPropagation(); // Prevent parent click listener from triggering
    }
  });
});
