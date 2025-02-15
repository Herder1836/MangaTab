document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Перевіряємо, чи був раніше увімкнений темний режим
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', null);
            darkModeToggle.textContent = '🌙';
        }
    });
});

 // Завантаження збереженого значення під час завантаження сторінки
 document.addEventListener("DOMContentLoaded", function() {
    const savedRating = localStorage.getItem("userRating");
    if (savedRating) {
      const radio = document.querySelector(`input[name="rating"][value="${savedRating}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
  });

  // Збереження обраної оцінки
  document.getElementById("save-rating").addEventListener("click", function() {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
      localStorage.setItem("userRating", selectedRating.value);
      alert("Оценка сохранена: " + selectedRating.value);
    } else {
      alert("Пожалуйста, выберите оценку.");
    }
  });