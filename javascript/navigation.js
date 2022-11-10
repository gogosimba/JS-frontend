const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar">
    <section class="nav">
        <img src="#" class="brand-logo" alt="brand-logo-for-webshop">
        <article class="nav-items">
            <article class="search">
                <input type="text" class="search-field" placeholder="search...">
                <button class="search-btn">search</button>
            </article>
            <a href="#"><img src="#" alt="#"></a>
            <a href="#"><img src="#" alt="#"></a>
        </article>
    </section>
    <ul class="navlinks-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
    </ul>
</nav>`;
}

createNav(); 