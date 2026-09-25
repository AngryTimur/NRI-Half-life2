/* Я уже не помню что выполняет данный скрипт но он есть
Скорее всего для мобилок приколы просто и все*/
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        const sidebar = document.querySelector('.sidebar');

        if (sidebar) {
            const toggle = document.createElement('button');
            toggle.className = 'sidebar-toggle';
            toggle.type = 'button';
            toggle.setAttribute('aria-label', 'Открыть навигацию');
            toggle.innerHTML = '<span></span><span></span><span></span>';

            sidebar.appendChild(toggle);

            toggle.addEventListener('click', function () {
                const opened = sidebar.classList.toggle('mobile-open');
                toggle.setAttribute('aria-label', opened ? 'Закрыть навигацию' : 'Открыть навигацию');
            });

            sidebar.querySelectorAll('.nav-button').forEach(function (link) {
                link.addEventListener('click', function () {
                    sidebar.classList.remove('mobile-open');
                });
            });
        }

        const content = document.querySelector('.content');
        if (content) {
            content.classList.add('is-ready');
        }
    });
})();
