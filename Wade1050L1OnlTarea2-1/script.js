document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Validación simple del formulario
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        feedback.innerHTML = `<span class="text-danger">Por favor, complete todos los campos requeridos correctamente.</span>`;
        return;
      }

      const nombre = document.getElementById('nombre').value;

      // Respuesta de éxito accesible
      feedback.innerHTML = `<div class="alert alert-success" role="alert">
        ¡Gracias <strong>${escapeHTML(nombre)}</strong>! Tu mensaje ha sido enviado exitosamente.
      </div>`;

      // Reiniciar formulario
      form.reset();
      form.classList.remove('was-validated');
    });
  }

  // ==========================================
  // FUNCIONALIDAD: BOTONES EN CONSTRUCCIÓN
  // ==========================================
  const btnLeerMas = document.getElementById('btnLeerMas');
  const btnExplorar = document.getElementById('btnExplorar');
  const construccionAlert = document.getElementById('construccionAlert');

  function mostrarEnConstruccion(e) {
    e.preventDefault();
    if (construccionAlert) {
      construccionAlert.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show shadow-sm mb-4" role="alert">
          🚧 <strong>¡Aviso!</strong> Esta página se encuentra actualmente en construcción. ¡Próximamente disponible!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>
      `;
      
      // Desplazamiento suave hacia la alerta para que el usuario la visualice de inmediato
      construccionAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  if (btnLeerMas) btnLeerMas.addEventListener('click', mostrarEnConstruccion);
  if (btnExplorar) btnExplorar.addEventListener('click', mostrarEnConstruccion);

  // Función de escape para prevenir XSS
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});