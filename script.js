// Перемикання вкладок Медіа / Текст
function openTab(tabName, button) {
    let allButtons = document.querySelectorAll('.tab-btn');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
    }
    button.classList.add('active');

    if (tabName === 'media') {
        document.getElementById('media-zone').style.display = 'flex';
        document.getElementById('text-zone').style.display = 'none';
    } else {
        document.getElementById('media-zone').style.display = 'none';
        document.getElementById('text-zone').style.display = 'flex';
    }
}

// Вивід назви вибраного файлу
function showFileName(input) {
    if (input.files && input.files[0]) {
        let fileName = input.files[0].name;
        document.getElementById('file-title').innerText = "Обрано файл: " + fileName;
    }
}

// Кнопка перевірки тексту
function checkText() {
    alert("Функція аналізу тексту підключається до сервера");
}
