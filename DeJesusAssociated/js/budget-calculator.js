// js/budget-calculator.js
document.addEventListener('DOMContentLoaded', () => {
  const serviceSelect = document.getElementById('serviceType');
  const scopeSelect = document.getElementById('projectScope');
  const supportCheckbox = document.getElementById('includeSupport');
  const totalDisplay = document.getElementById('totalBudget');

  if (!serviceSelect || !scopeSelect || !totalDisplay) return;

  function calculateTotal() {
    const basePrices = {
      db: 1500,
      dev: 2000,
      sec: 1200,
      cloud: 1800
    };

    const scopeMultipliers = {
      basic: 1,
      medium: 1.8,
      enterprise: 3.2
    };

    const selectedService = serviceSelect.value;
    const selectedScope = scopeSelect.value;
    const addSupport = supportCheckbox ? supportCheckbox.checked : false;

    if (!selectedService || !selectedScope) {
      totalDisplay.textContent = '$0.00';
      return;
    }

    let base = basePrices[selectedService] || 0;
    let multiplier = scopeMultipliers[selectedScope] || 1;
    let total = base * multiplier;

    if (addSupport) {
      total += 450; // Costo adicional de soporte
    }

    totalDisplay.textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  }

  serviceSelect.addEventListener('change', calculateTotal);
  scopeSelect.addEventListener('change', calculateTotal);
  if (supportCheckbox) {
    supportCheckbox.addEventListener('change', calculateTotal);
  }
});