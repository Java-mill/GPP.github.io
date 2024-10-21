// Функция для генерации пароля
function generatePassword() {
    const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let result = '';

    // Получаем выборки для каждого типа символов
    const uppercaseChars = characters.slice(26);
    const lowercaseChars = characters.slice(0, 26);
    const numbers = characters.slice(-10);

    const useUppercase = document.getElementById('useUppercase').checked;
    const useLowercase = document.getElementById('useLowercase').checked;
    const useNumbers = document.getElementById('useNumbers').checked;

    if (useUppercase) {
        result += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if (useLowercase) {
        result += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (useNumbers) {
        result += numbers[Math.floor(Math.random() * numbers.length)];
    }

    // Генерация пароля
    document.getElementById('output').innerText = result;
}