// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    
    // Inicializar el carrusel de Bootstrap con un intervalo de 4 segundos
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    if (myCarousel) {
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 4000,
            ride: 'carousel'
        });
    }

    // Desplazamiento suave (Smooth Scroll) para los enlaces de la barra de navegación
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Validar si el enlace es un ancla interna (comienza con #)
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    console.log("¡JavaScript cargado y funcionando correctamente para la galería de imágenes!");
});