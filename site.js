document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <header class="site-header">
            <div class="header-brand">
                <h1 translate="no">
                    <a href="index.html" class="brand-link">
                        <img src="./logo.png" alt="LaMontagne Tech Logo" class="brand-logo">
                        <span>LaMontagne Tech</span>
                    </a>
                </h1>
            </div>
            <nav class="header-nav">
                <a href="typing.html">Typing Drills</a>
                <a href="htmlcss.html">HTML &amp; CSS</a>
                <a href="spreadsheets.html">Spreadsheets</a>
                <div class="nav-dropdown"><button class="nav-dropdown-toggle" type="button" aria-expanded="false" aria-controls="os-nav-menu">Operating Systems <span aria-hidden="true">▾</span></button><div class="nav-dropdown-menu" id="os-nav-menu"><a href="chromeos.html">Chrome OS</a></div></div>
                <a href="about.html">About</a>
            </nav>
        </header>
    `;

    if (!document.querySelector('link[data-os-nav]')) {
        const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'os-nav.css'; link.dataset.osNav = 'true'; document.head.appendChild(link);
    }
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Highlight the active navigation link based on current URL
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".header-nav a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    const osDropdown = document.querySelector('.nav-dropdown');
    const osToggle = document.querySelector('.nav-dropdown-toggle');
    if (osDropdown && osToggle) {
        const close = () => { osDropdown.classList.remove('open'); osToggle.setAttribute('aria-expanded','false'); };
        osToggle.addEventListener('click', () => { const opened = osDropdown.classList.toggle('open'); osToggle.setAttribute('aria-expanded', String(opened)); });
        document.addEventListener('click', event => { if (!osDropdown.contains(event.target)) close(); });
        document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); osToggle.focus(); } });
        if (currentPage === 'chromeos.html') osToggle.classList.add('active');
    }

    // Dynamic Age Calculation
    const ageElement = document.getElementById("dynamic-age");
    if (ageElement) {
        const birthDate = new Date(1986, 5, 10); // 5 = June in JS - indexed at 0
        const today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        ageElement.textContent = age;
    }
});
