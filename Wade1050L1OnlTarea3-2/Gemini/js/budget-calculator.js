/**
 * REQUERIMIENTO 6: Módulo de Cálculo Dinámico para la Calculadora de Presupuesto
 */
document.addEventListener('DOMContentLoaded', () => {
    const serviceSelect = document.getElementById('serviceType');
    const scopeSelect = document.getElementById('projectScope');
    const supportCheckbox = document.getElementById('includeSupport');
    const totalDisplay = document.getElementById('totalBudget');

    // Matriz de precios base por tipo de servicio
    const basePrices = {
        db: 1200,      // Arquitectura & DB SQL
        dev: 1500,     // Desarrollo Web / App
        sec: 1800,     // Ciberseguridad & Redes
        cloud: 2000    // Infraestructura Nube / Virtualización
    };

    // Multiplicadores por alcance del proyecto
    const scopeMultipliers = {
        basic: 1.0,     // Básico
        medium: 1.5,    // Mediano
        enterprise: 2.5 // Corporativo / Alta Disponibilidad
    };

    function calculateTotal() {
        const service = serviceSelect ? serviceSelect.value : '';
        const scope = scopeSelect ? scopeSelect.value : '';
        const includeSupport = supportCheckbox ? supportCheckbox.checked : false;

        if (!service || !scope) {
            totalDisplay.textContent = '$0.00';
            return;
        }

        let base = basePrices[service] || 0;
        let multiplier = scopeMultipliers[scope] || 1;
        let total = base * multiplier;

        if (includeSupport) {
            total += 450; // Plan adicional de mantenimiento
        }

        // Formateo de moneda
        totalDisplay.textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    if (serviceSelect && scopeSelect && supportCheckbox) {
        serviceSelect.addEventListener('change', calculateTotal);
        scopeSelect.addEventListener('change', calculateTotal);
        supportCheckbox.addEventListener('change', calculateTotal);
    }
});