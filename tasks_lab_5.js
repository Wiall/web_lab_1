// ---------------------------task 1--------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Отримання елементів
    var upperBlock = document.querySelector('.upper');
    var downBlock = document.querySelector('.down');

    // Збереження вмісту у змінних
    var upperContent = upperBlock.innerHTML;
    var downContent = downBlock.innerHTML;

    // Обмін вмістом між блоками
    upperBlock.innerHTML = downContent;
    downBlock.innerHTML = upperContent;
});

// ---------------------------task 2--------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Значення змінних для обчислення площі трикутника
    var base = 10; // довжина основи трикутника
    var height = 5; // висота трикутника

    // Функція для обчислення площі трикутника
    function calculateTriangleArea(base, height) {
        return 0.5 * base * height;
    }

    // Обчислення площі
    var area = calculateTriangleArea(base, height);

    // Додавання результату до кінця блоку 'page'
    var pageBlock = document.querySelector('.page');
    var resultParagraph = document.createElement('p');
    resultParagraph.textContent = 'Площа трикутника: ' + area + ' квадратних одиниць';
    
    pageBlock.appendChild(resultParagraph);
});

// ---------------------------task 3--------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Функція для перевірки наявності cookies
    function checkCookieExists(cookieName) {
        return document.cookie.split(';').some(cookie => cookie.trim().startsWith(cookieName + '='));
    }

    // Перевірка наявності cookies при завантаженні сторінки
    if (checkCookieExists('minCount')) {
        // Отримання значення з cookies
        var minCount = document.cookie.replace(/(?:(?:^|.*;\s*)minCount\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        // Показ діалогового вікна із збереженим результатом
        if (confirm('Збережена інформація: кількість мінімальних чисел = ' + minCount + '. Після натискання "ОК" дані будуть видалені.')) {
            // Видалення cookies
            document.cookie = 'minCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

            alert('Cookies видалено.');
        }
    } else {
        // Додаємо обробку натискання кнопки відправки форми
        document.getElementById('submitBtn').addEventListener('click', function() {
            var input = document.getElementById('numberInput').value;

            // Перетворення введених даних у масив чисел
            var numArray = input.split(',').map(Number);

            // Перевірка, чи введено рівно 10 чисел
            if (numArray.length === 10 && numArray.every(num => !isNaN(num))) {
                // Знаходження мінімального числа
                var minValue = Math.min(...numArray);

                // Підрахунок кількості мінімальних чисел
                var minCount = numArray.filter(num => num === minValue).length;

                // Збереження результату в cookies
                document.cookie = 'minCount=' + minCount + '; path=/; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();

                // Відображення діалогового вікна з результатом
                alert('Кількість мінімальних чисел: ' + minCount);
            } else {
                alert('Помилка: введіть рівно 10 чисел через кому.');
            }
        });
    }
});

// ---------------------------task 4--------------------------------
document.addEventListener('DOMContentLoaded', function() {
        console.log(document.getElementById('color')); // Перевірка наявності елемента
    console.log(document.getElementById('submitColor')); // Перевірка наявності елемента
    const pageBlock = document.getElementById('page');
    const colorInput = document.getElementById('color');
    const colorButton = document.getElementById('submitColor');

    // Відновлення кольору тексту з localStorage
    const savedColor = localStorage.getItem('textColor');
    if (savedColor) {
        pageBlock.style.color = savedColor; // Застосування збереженого кольору
    }

    // Зміна кольору тексту при виборі нового кольору
    colorButton.addEventListener('click', function() {
        const selectedColor = colorInput.value;
        pageBlock.style.color = selectedColor; // Застосування вибраного кольору
        localStorage.setItem('textColor', selectedColor); // Збереження кольору в localStorage
    });
});

// ---------------------------task 5--------------------------------

