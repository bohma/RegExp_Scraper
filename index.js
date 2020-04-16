const fs = require("fs");//Библиотека NodeJS для чтения из файлов
pageSourceCode = fs.readFileSync("exampleOfWebSite.txt", "utf8");//Добавлям исходный код в переменную
pageSourceCode = pageSourceCode.replace(/<\s*noscript\b[^<]*(?:(?!<\/noscript\s*>)<[^<]*)*<\s*\/\s*noscript\s*>/g, '')//Удаляем теги <noscript> и их содержимое 
    .replace(/<\s*script\b[^<]*(?:(?!<\/script\s*>)<[^<]*)*<\s*\/\s*script\s*>/g, '')//Удаляем теги <script> и их содержимое <script>
    .replace(/<\s*style\b[^<]*(?:(?!<\/style\s*>)<[^<]*)*<\s*\/\s*style\s*>/g, '')//Удаляем теги <style> и их содержимое 
    .replace(/<span>&gt;<\/span>/g, '')//Удаляем то чего не видно на сайте
    .replace(/&copy;|&trade;/g, '')//Удаляем то чего не видно на сайте
    .replace(/\b\d*\b/g, '')//Удаляем числа
    .replace(/,|\(|\)|\?|\!|\.\B|\:\B/g, '')//Удаляем знаки пунктуации
    .replace(/(\<(\/?[^>]+)>)/g, '')//Удаляем HTML теги
    .split(/\s/)//Формируем слова из исходного кода HTML,и добавляем все в массив
let mass = [], i = 0    //Добавляем массив для хранения слов и переменную для подсчёта слов
for (let words of pageSourceCode) {
    if ((words !== '') && (words.length > 3)) {//Отсеиваем пустые элементы и сортируем по количеству слов длинна которых больше 3
        mass.push(words)//Добавляем слово в массив 
        i++//+1 к количеству слов
    }
}
console.log(mass)
console.log('Количесвто слов: ' + i)


let reg = /(?<=\<a\s+?href="https:\/\/a-parser\.com\/wiki\/(?!index)(?!special)(?!")(?!parsers).+?">).*?(?=<\/a>\s*<\/b>\s*<\/td>\s*<td>)|(?<=<td>).*?(?=<\/td>)/
//Регулярное выражение для поиска нужной нам информации внутри конкретных тегов