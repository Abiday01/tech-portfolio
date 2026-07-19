const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
// const images = document.querySelectorAll(".lab-gallery img");
const images = document.querySelectorAll("img");
const closeBtn = document.querySelector(".lightbox-close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});





document.addEventListener('DOMContentLoaded', () => {

 
    const latestProjects = [
    { img: "./project cover/IT.png", title: "Enterprise IT Support Environment", link: "enterprise-setup.html" },
        { img: "./project cover/tksys.png", title: "Ticketing System", link: "spiceworks.html" },
        { img: "./project cover/kb.png", title: "Ticket Library", link: "tickets.html" },
        { img: "./project cover/ad.png", title: "Active Directory Lab", link: "ad.html" },
        { img: "./project cover/rbac.png", title: "Identity & Access Management", link: "m365.html" },
        { img: "./project cover/conditional.png", title: "Conditional Access", link: "conditional-access.html" },
        { img: "./project cover/mfa.png", title: "Multi-Factor Authentication", link: "mfa.html" },
        // { img: "./project cover/customerservices.png", title: "Ticketing & Call Handling", link: "ticketing.html" },
        { img: "./photos/motherboard.png", title: "Operating Systems & Hardware", link: "os.html" }
    ];
    const track = document.getElementById('projectTrack');
    const dotsContainer = document.getElementById('projectDots');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');

    let visibleCount = 3;
    let currentIndex = 0;

    function getVisibleCount() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    }

    function buildTrack() {
        track.innerHTML = latestProjects.map(p => `
            <a href="${p.link}" class="home-project-card">
                <img src="${p.img}" alt="${p.title}">
                <h3>${p.title}</h3>
            </a>
        `).join('');
    }

    function buildDots() {
        visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, latestProjects.length - visibleCount);

        if (currentIndex > maxIndex) currentIndex = maxIndex;

        dotsContainer.innerHTML = '';

        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    function updateSlider() {
        const cardWidth = track.children[0].getBoundingClientRect().width;
        const gap = 30;
        const offset = currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        document.querySelectorAll('.slider-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const maxIndex = Math.max(0, latestProjects.length - visibleCount);
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const maxIndex = Math.max(0, latestProjects.length - visibleCount);
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateSlider();
    });

    window.addEventListener('resize', () => {
        buildDots();
        updateSlider();
    });

    buildTrack();
    buildDots();
    updateSlider();

});









const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
