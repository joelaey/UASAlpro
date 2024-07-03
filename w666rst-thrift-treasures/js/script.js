//Toggle class actie
const navbarNav = document.querySelector('.navbar-nav');

//Klik menu
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik diluar menu = close
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// Tangkap elemen-elemen yang diperlukan
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

// Atur event listener untuk link "Click here to register."
registerLink.addEventListener('click', function(event) {
    event.preventDefault(); // Hindari aksi default dari link
    registerForm.style.display = 'block'; // Tampilkan form register
    loginForm.style.display = 'none'; // Sembunyikan form login
});

// Atur event listener untuk link "Click here to login."
loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Hindari aksi default dari link
    loginForm.style.display = 'block'; // Tampilkan form login
    registerForm.style.display = 'none'; // Sembunyikan form register
});

document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('searchForm');
    var searchButton = document.getElementById('search');

    // Fungsi untuk menampilkan atau menyembunyikan form
    function toggleSearchForm(displayStatus) {
        searchForm.style.display = displayStatus;
    }

    // Event listener untuk tombol search
    searchButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Hentikan event bubbling
        var currentDisplay = searchForm.style.display;
        toggleSearchForm(currentDisplay === 'block' ? 'none' : 'block');
    });

    // Event listener untuk klik di luar form pencarian
    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target) && !searchButton.contains(event.target)) {
            toggleSearchForm('none');
        }
    });
});

let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('cartTotal').textContent = `Rp${total}`;
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('open');
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('open');
}

function checkout() {
    alert('Checkout belum diimplementasikan');
    closeCart();
}

function addToCart(product) {
    cart.push(product);
    updateCartUI();
    alert('Produk ditambahkan ke keranjang!');
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('cartTotal').textContent = `Rp${total}`;
}
