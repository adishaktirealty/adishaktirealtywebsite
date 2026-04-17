/**
 * Adishakti Realty - Global Layout Script
 * Handles Navbar, Footer, and Global Styles
 */

// 1. GLOBAL STYLES
const globalStyles = `
    /* --- VARIABLES --- */
    :root {
        --primary-gold: #D4AF37;
        --primary-orange: #E67E22;
        --gradient-main: linear-gradient(135deg, #E67E22 0%, #D4AF37 100%);
        --dark-text: #1a1a1a;
        --light-text: #555555;
        --bg-white: #ffffff;
        --off-white: #f8f8f8;
        --font-main: 'Montserrat', sans-serif;
        --font-serif: 'Playfair Display', serif;
    }

    /* --- NAVIGATION --- */
    nav {
        position: fixed; top: 0; width: 100%; height: 80px;
        display: flex; justify-content: space-between; align-items: center;
        padding: 0 5%; z-index: 1000; 
        background: transparent;
        transition: transform 0.4s ease-in-out, background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
    }

    /* --- HIDDEN STATE (Mobile Only) --- */
    nav.nav-hidden {
        transform: translateY(-100%);
    }

    /* --- SCROLLED STATE (Glass Effect) --- */
    nav.scrolled {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        padding: 0 5%; /* Desktop keeps standard padding */
    }

    .logo { 
        font-size: 1.4rem; font-weight: 800; text-transform: uppercase; 
        letter-spacing: 1px; color: var(--dark-text); text-decoration: none;
    }
    .logo span { color: var(--primary-orange); }

    .nav-links { display: flex; gap: 2.5rem; list-style: none; }
    .nav-links a { 
        text-decoration: none; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; 
        letter-spacing: 1px; position: relative; color: var(--dark-text); transition: 0.3s;
    }
    .nav-links a::after {
        content: ''; position: absolute; width: 0; height: 2px; bottom: -5px; left: 0;
        background: var(--primary-gold); transition: 0.3s;
    }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .nav-links a:hover, .nav-links a.active { color: var(--primary-orange); }

    .menu-toggle { display: none; font-size: 1.5rem; cursor: pointer; color: var(--dark-text); }

    /* --- FOOTER --- */
    footer {
        background: #0f0f0f; color: white; padding: 5rem 5% 2rem; text-align: center;
        margin-top: auto; 
    }
    footer h2 {
        font-family: var(--font-serif); font-size: 2rem; margin-bottom: 1rem;
    }
    footer h2 span { color: var(--primary-gold); }
    
    .footer-desc { max-width: 500px; margin: 0 auto; color: #888; line-height: 1.6; }

    .footer-socials { margin: 2rem 0; display: flex; justify-content: center; gap: 2rem; }
    .footer-socials i { font-size: 1.5rem; cursor: pointer; transition: 0.3s; color: #666; }
    .footer-socials i:hover { color: var(--primary-orange); }
    .copyright { color: #444; font-size: 0.8rem; }

    /* --- RESPONSIVE NAV --- */
    @media (max-width: 768px) {
        nav.scrolled { padding: 0.8rem 5%; } /* Compact padding on mobile scroll */
        nav { background: rgba(255, 255, 255, 0.54); backdrop-filter: blur(10px); }
        
        .menu-toggle { display: block; }
        .nav-links {
            position: absolute; top: 100%; left: 0; width: 100%;
            background: white; flex-direction: column; align-items: center;
            gap: 2rem; padding: 2rem 0;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            display: none; opacity: 0; transform: translateY(-20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .nav-links.active { display: flex; opacity: 1; transform: translateY(0); }
    }
`;

// 2. NAVBAR HTML
const navbarHTML = `
    <nav id="main-nav">
        <a href="index.html" class="logo">Adishakti<span>Realty</span>.</a>
        
        <div class="menu-toggle" id="menuToggle">
            <i class="fas fa-bars"></i>
        </div>

        <ul class="nav-links" id="navLinks">
            <li><a href="index.html" data-page="index">Home</a></li>
            <li><a href="about.html" data-page="about">About</a></li>
            <li><a href="explore.html" data-page="explore">Properties</a></li>
            <li><a href="contact.html" data-page="contact">Contact</a></li>
        </ul>
    </nav>
`;

// 3. FOOTER HTML
const footerHTML = `
    <footer>
        <h2>Adishakti<span>Realty</span></h2>
        <p class="footer-desc">
            Your trusted partner in finding the perfect property. We bring you the best deals in town with complete transparency.
        </p>
        <div class="footer-socials">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-whatsapp"></i>
        </div>
        <div class="copyright">&copy; 2026 Adishakti Realty. All rights reserved.</div>
    </footer>
`;

// 4. LOAD FUNCTION
document.addEventListener("DOMContentLoaded", () => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = globalStyles;
    document.head.appendChild(styleSheet);

    const navPlaceholder = document.getElementById("navbar-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    initNavbarLogic();
    highlightActiveLink();
});

// 5. NAVBAR LOGIC (Mobile: Hide on Scroll | Desktop: Always Visible)
function initNavbarLogic() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    let lastScrollY = window.scrollY;
    
    // Mobile Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // SCROLL LISTENER
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (!nav) return;

        const currentScrollY = window.scrollY;
        const isMobile = window.innerWidth <= 768; // Mobile Breakpoint

        // 1. Glass Effect (Applies to ALL screens)
        if (currentScrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // 2. Hide/Show Logic (MOBILE ONLY)
        if (isMobile) {
            // Prevent hiding if menu is open
            if (navLinks.classList.contains('active')) {
                nav.classList.remove('nav-hidden');
                lastScrollY = currentScrollY;
                return;
            }

            // Hide if scrolling down > 60px
            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                nav.classList.add('nav-hidden');
            } else {
                // Show if scrolling up
                nav.classList.remove('nav-hidden');
            }
        } else {
            // Desktop: Always ensure visible
            nav.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    });
}

// 6. ACTIVE LINK HIGHLIGHTER
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        const page = link.getAttribute('data-page');
        if (currentPath.includes(page)) {
            link.classList.add('active');
        } 
        else if ((currentPath === '/' || currentPath.endsWith('index.html')) && page === 'index') {
            link.classList.add('active');
        }
    });
}