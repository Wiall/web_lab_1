// ---------------------------task 1--------------------------------

document.addEventListener('DOMContentLoaded', function() {
    var upperBlock = document.querySelector('.upper');
    var downBlock = document.querySelector('.down');

    var upperContent = upperBlock.innerHTML;
    var downContent = downBlock.innerHTML;

    upperBlock.innerHTML = downContent;
    downBlock.innerHTML = upperContent;
});

// ---------------------------task 2--------------------------------
document.addEventListener('DOMContentLoaded', function() {
    var base = 10;
    var height = 5;

    function calculateTriangleArea(base, height) {
        return 0.5 * base * height;
    }

    var area = calculateTriangleArea(base, height);

    var pageBlock = document.querySelector('.page');
    var resultParagraph = document.createElement('p');
    resultParagraph.textContent = 'Triangle area: ' + area;
    
    pageBlock.appendChild(resultParagraph);
});

// ---------------------------task 3--------------------------------
document.addEventListener('DOMContentLoaded', function() {
    function checkCookieExists(cookieName) {
        return document.cookie.split(';').some(cookie => cookie.trim().startsWith(cookieName + '='));
    }

    if (checkCookieExists('minCount')) {
        var minCount = document.cookie.replace(/(?:(?:^|.*;\s*)minCount\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        if (confirm('Збережена інформація: кількість мінімальних чисел = ' + minCount + '. Після натискання "ОК" дані будуть видалені.')) {
            document.cookie = 'minCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

            alert('Cookies видалено.');
        }
    } else {
        document.getElementById('submitBtn').addEventListener('click', function() {
            var input = document.getElementById('numberInput').value;

            var numArray = input.split(',').map(Number);

            if (numArray.length === 10 && numArray.every(num => !isNaN(num))) {
                var minValue = Math.min(...numArray);
                var minCount = numArray.filter(num => num === minValue).length;

                document.cookie = 'minCount=' + minCount + '; path=/; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();

                alert('Кількість мінімальних чисел: ' + minCount);
            } else {
                alert('Помилка: введіть рівно 10 чисел через кому.');
            }
        });
    }
});

// ---------------------------task 4--------------------------------
document.addEventListener('DOMContentLoaded', function() {
    console.log(document.getElementById('color'));
    console.log(document.getElementById('submitColor'));
    const pageBlock = document.getElementById('page');
    const colorInput = document.getElementById('color');
    const colorButton = document.getElementById('submitColor');

    const savedColor = localStorage.getItem('textColor');
    if (savedColor) {
        pageBlock.style.color = savedColor;
    }

    colorButton.addEventListener('click', function() {
        const selectedColor = colorInput.value;
        pageBlock.style.color = selectedColor;
        localStorage.setItem('textColor', selectedColor);
    });
});

// ---------------------------task 5--------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".container > div.page, .header, .upper, .down, .sidebar, .footer");
    const listKeyPrefix = "blockList_";

    function addListToBlock(block) {
        let ul = block.querySelector("ul");
        if (!ul) {
            ul = document.createElement("ul");
            block.appendChild(ul);

            let saveButton = document.createElement("button");
            saveButton.textContent = "Save list";
            saveButton.onclick = function () {
                saveList(block, ul);
            };
            block.appendChild(saveButton);
        }

        let newLi = createListItem();
        ul.appendChild(newLi);
    }

    function createListItem() {
        let li = document.createElement("li");
        li.textContent = "New element\t";
        return li;
    }

    function saveList(block, ul) {
        let listItems = Array.from(ul.children).map(li => li.textContent);
        let blockId = block.className || block.id;
        localStorage.setItem(listKeyPrefix + blockId, JSON.stringify(listItems));

        block.innerHTML = '';
        block.appendChild(ul);

        alert("Список збережено");
    }

    blocks.forEach((block) => {
        block.ondblclick = function (event) {
            if (!event.target.closest("ul")) {
                addListToBlock(block);
            }
        };
    });

    window.addEventListener("beforeunload", function () {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(listKeyPrefix)) {
                localStorage.removeItem(key);
            }
        });
    });
});
