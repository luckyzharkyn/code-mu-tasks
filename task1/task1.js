/*
    Задача 1
    Нахождение слов

    Дана строка со словами. Не используя массивы, 
    циклы и регулярные выражения выведите на экран: 
    первое слово, второе слово, последнее слово.
*/ 
function isLetter(character) {
    let result = true;
    switch (character) {
        case ',':
        case '?':
        case '.':
        case ':': 
        case '!': 
        case ' ': 
         result = false;
         break;
        default:
            result = true;
            break;
    }
    return result;
}

function fillProcessWords(processWords, newWord) {
    if(processWords.firstWord === '') {
        processWords.firstWord = newWord;
    } else if(processWords.secondWord === '') {
        processWords.secondWord = newWord;
    }
    processWords.lastWord = newWord;
    return processWords;
}

function check(strLength, str, processWords, newWord='', index=0) {
    if(strLength === 0) return;
    const letter = str.charAt(index);

    index++;
    if(isLetter(letter)) {
        newWord += letter;
        if(strLength === index) {
            fillProcessWords(processWords, newWord);
            return processWords;
        }
        check(strLength, str, processWords, newWord, index);
    } else {
        fillProcessWords(processWords, newWord);
        if(strLength === index) return processWords;
        check(strLength, str, processWords, '', index);
    }

    return processWords;
}

let words = `Дана строка со словами. Не используя массивы, 
циклы и регулярные выражения выведите на экран: 
первое слово, второе слово, последнее слово.`;
const processWords = {
    firstWord: '',
    secondWord: '',
    lastWord: ''
} 
const result = check(words.length, words, processWords);
if(result !== undefined) {
    console.log('result.firstWord::: ', result.firstWord);
    console.log('result.secondWord::: ', result.secondWord);
    console.log('result.lastWord::: ', result.lastWord);
} else {
    console.log('Не удалось найти слова');
}
