// mobile nav toggles — we created 4 toggle IDs so pages can reuse same script
function setupToggle(toggleId, linksId) {
    const btn = document.getElementById(toggleId);
    const links = document.getElementById(linksId);
    if (!btn || !links) return;
    btn.addEventListener('click', () => {
        links.classList.toggle('show');
    });

    // close when a link is clicked
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        links.classList.remove('show');
    }));
}

// attempt to wire up the nav toggles used in pages
setupToggle('nav-toggle', 'nav-links');
setupToggle('nav-toggle-2', 'nav-links-2');
setupToggle('nav-toggle-3', 'nav-links-3');
setupToggle('nav-toggle-4', 'nav-links-4');

// small enhancement: reduce motion if user prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}
