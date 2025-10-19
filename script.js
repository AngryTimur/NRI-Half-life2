function showPage(pageId) {
    // Скрыть все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Убрать активный класс со всех кнопок
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Показать выбранную страницу
    document.getElementById(pageId).classList.add('active');
    
    // Сделать кнопку активной
    event.target.classList.add('active');
}

// Добавляем обработчики для плавной загрузки
document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление контента при загрузке
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            content.style.opacity = '1';
        }, 100);
    }
});