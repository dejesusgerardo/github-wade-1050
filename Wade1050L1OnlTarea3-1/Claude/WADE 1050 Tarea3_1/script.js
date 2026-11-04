// Script de interacción para DeJesús & Associates
document.addEventListener('DOMContentLoaded', () => {

    // 1. Formulario de cotización
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por comunicarte con DeJesús & Associates! Recibimos tu solicitud de cotización y nos pondremos en contacto contigo a la brevedad.');
            contactForm.reset();
        });
    }

    // 2. Filtro del catálogo (usa el atributo data-destacada de cada tarjeta)
    const btnAll = document.getElementById('btnAll');
    const btnFeatured = document.getElementById('btnFilterModern');
    const doorCards = document.querySelectorAll('.door-card-item');

    function setFilter(onlyFeatured) {
        btnAll.classList.toggle('active', !onlyFeatured);
        btnFeatured.classList.toggle('active', onlyFeatured);
        doorCards.forEach(card => {
            const show = !onlyFeatured || card.dataset.destacada === 'true';
            card.style.display = show ? 'flex' : 'none';
        });
    }

    if (btnAll && btnFeatured) {
        btnAll.addEventListener('click', () => setFilter(false));
        btnFeatured.addEventListener('click', () => setFilter(true));
    }
});

// 3. Modal para ampliar la imagen
function openModal(imageSrc, title) {
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');

    if (modalImg && modalTitle) {
        modalImg.src = imageSrc;
        modalImg.alt = title;
        modalTitle.textContent = title;
        bootstrap.Modal.getOrCreateInstance(document.getElementById('imageModal')).show();
    }
}
