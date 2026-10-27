// Script de interacción para DeJesús & Associates
document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del Formulario de Cotización
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por comunicarte con DeJesús & Associates! Hemos recibido su solicitud de cotización y nos pondremos en contacto a la brevedad.');
            contactForm.reset();
        });
    }

    // 2. Filtro simple para el Catálogo
    const btnAll = document.getElementById('btnAll');
    const btnFilterModern = document.getElementById('btnFilterModern');
    const doorCards = document.querySelectorAll('.door-card-item');

    if (btnAll && btnFilterModern) {
        btnAll.addEventListener('click', () => {
            btnAll.classList.add('active');
            btnFilterModern.classList.remove('active');
            doorCards.forEach(card => card.style.display = 'flex');
        });

        btnFilterModern.addEventListener('click', () => {
            btnFilterModern.classList.add('active');
            btnAll.classList.remove('active');
            
            // Muestra solo los primeros 5 modelos como "Destacados"
            doorCards.forEach((card, index) => {
                if (index < 5) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

// 3. Función global para abrir el Modal y ampliar la imagen
function openModal(imageSrc, title) {
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    
    if (modalImg && modalTitle) {
        modalImg.src = imageSrc;
        modalTitle.textContent = title;
        
        const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
        myModal.show();
    }
}