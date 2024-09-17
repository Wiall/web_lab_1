document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('recipeImg');
    const areas = document.querySelectorAll('.map-area');

    // Оригінальні координати для великого екрану
    const originalCoordsLarge = [
        [50, 50, 160, 150],
        [180, 50, 320, 150],
        [340, 50, 500, 150],
        [535, 50, 700, 150]
    ];

    // Координати для мобільного екрану (наприклад, для екрану шириною менше 768px)
    const originalCoordsMobile = [
        [25, 25, 70, 65],
        [100, 25, 165, 65],
        [185, 25, 255, 65],
        [270, 25, 350, 65]
    ];

    // Функція для оновлення координат
    function resizeMap() {
        const imgWidth = image.offsetWidth;
        const windowWidth = window.innerWidth;
        
        // Якщо ширина екрану більше 760px, використовуємо великі координати
        if (windowWidth > 768) {
            const originalWidth = 768;
            const scaleFactor = imgWidth / originalWidth;

            areas.forEach((area, index) => {
                const newCoords = originalCoordsLarge[index].map(coord => Math.round(coord * scaleFactor));
                area.coords = newCoords.join(',');
            });
        } 
        // Якщо ширина екрану менша або рівна 760px, використовуємо мобільні координати
        else {
            const originalWidth = 360;   // Оригінальна ширина зображення на мобільному екрані
            const scaleFactor = imgWidth / originalWidth;

            areas.forEach((area, index) => {
                const newCoords = originalCoordsMobile[index].map(coord => Math.round(coord * scaleFactor));
                area.coords = newCoords.join(',');
            });
        }
    }

    // Запускаємо оновлення при завантаженні сторінки та зміні розміру вікна
    window.addEventListener('resize', resizeMap);
    resizeMap();  // Виклик при завантаженні сторінки
});
