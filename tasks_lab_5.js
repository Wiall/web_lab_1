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

//-----------------------------------------test-----------------------------------------

// ---------------------------task 3--------------------------------
document.addEventListener('DOMContentLoaded', function() {

    //location.reload();

    // Перевірка наявності cookies при завантаженні сторінки
    if (checkCookieExists('minCount')) {
        // Отримання значення з cookies
        var minCount = document.cookie.replace(/(?:(?:^|.*;\s*)minCount\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        // Показ діалогового вікна із збереженим результатом
        if (confirm('Збережена інформація: кількість мінімальних чисел = ' + minCount + '. Після натискання "ОК" дані будуть видалені.')) {
            // Видалення cookies
            document.cookie = 'minCount=' + minCount + '; path=/; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();

            alert('Cookies видалено.');

            // Перезавантаження сторінки
            location.reload();
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
                document.cookie = 'minCount=' + minCount + '; path=/; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString() + '; SameSite=Lax';

                // Відображення діалогового вікна з результатом
                alert('Кількість мінімальних чисел: ' + minCount);
            } else {
                alert('Помилка: введіть рівно 10 чисел через кому.');
            }
        });
    }
});

