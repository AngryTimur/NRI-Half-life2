async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) return;

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        element.innerHTML = await response.text();
    } catch (error) {
        console.error(`Component load failed: ${file}`, error);
    }
}

function markActiveNavigation() {
    const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    document.querySelectorAll('#navigation .nav-button').forEach(link => {
        const href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
        const active = href === current;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('navigation', 'components/navigation.html');
    await loadComponent('footer', 'components/footer.html');
    markActiveNavigation();
});
