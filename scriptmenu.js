// Дочекаємося, поки документ буде повністю завантажено
document.addEventListener("DOMContentLoaded", () => {
    // Отримуємо всі вкладки та контент
    const tabs = document.querySelectorAll('.tabs li');
    const contents = document.querySelectorAll('.tab-content');

    // Додаємо обробник події для кожної вкладки
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Видаляємо клас active у всіх вкладок та контенту
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Додаємо клас active до поточної вкладки та відповідного контенту
            tab.classList.add('active');
            const activeContentId = tab.dataset.tab; // Отримуємо id контенту з data-атрибута
            document.getElementById(activeContentId).classList.add('active');
        });
    });
});
