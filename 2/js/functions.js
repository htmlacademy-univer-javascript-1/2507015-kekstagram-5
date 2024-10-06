function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
