// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let text =  document.querySelector('#text');

// text.onclick = () =>{
//     text.innerText = '';
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let go = document.querySelector('button');
// go.onclick = () =>{
//     go.style.display = 'none'
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let age = document.querySelector('input');
// go.onclick = () => {
//     if(age.value < 18){
//         console.log('go school');
//     }
//     console.log(age.value);
// }


// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.querySelector('#m');
let list = document.querySelector('menu')
// menu.onclick = () =>{
//     if(list.style.display === 'none'){
//         list.style.display = 'block'
//     }else{
//         list.style.display = 'none'
//     }
    
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = {
//     title : 'lorem',
//      body:'lorem ipsum dolo sit ameti'
// }



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.



    // let btn = document.querySelector('#btn')
    // btn.onclick = ()=>{
    //     for(let form of document.forms){
    //         for(let input of form){
    //             console.log(input.value);
    //         }
    //     }
    // }
    


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let tbl = document.getElementById('tbl');
// let col = prompt();
// let row = prompt();
// let txt = prompt()


// for(let i=0; i<col; i++){

//     let tr = document.createElement('tr');


//     for(let j=0;j<row; j++){

//         let td = document.createElement('td');

//         td.innerText=txt;

//         tr.appendChild(td);

//     }

//     tbl.appendChild(tr);

// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let tbl = document.getElementById('table');
// let row = document.querySelector('#row');
// let col = document.querySelector('#col');
// let num = document.querySelector('#num')

// let btn = document.querySelector('#btn')
// btn.onclick = () =>{
//     for(let i=0; i<col.value; i++){

//     let tr = document.createElement('tr');


//     for(let j=0;j<row.value; j++){

//         let td = document.createElement('td');

//         td.innerText=num.value;

//         tr.appendChild(td);

//     }

//     tbl.appendChild(tr);

// }
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.













// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let arr = ['fuck','shit','asshole','kurwa'];
// let word = document.querySelector('#word');
// let check = document.querySelector('#check');

// check.onclick = () => {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === word.value){
//             alert('я тобі зараз як матюкнусь ')
//         }
//     }
// }



// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let input = document.querySelector('#word');
// let check = document.querySelector('#check');

// check.onclick = () => {
//         for(let word of arr){
//             input.value.includes(word) && alert('da')
//         }

//         // return true && false && 'asd'
   
// }

// let port = 3333;

// let config = {
//     port: port || '33234234'
// }


// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let users = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}                    
];

// for(let user of users){
//     console.log(user);
// }

// let check1 = document.querySelector('#check1')
// console.log(check1.value);


// let check2 = document.querySelector('#check2')
// console.log(check2.value);

// let check3 = document.querySelector('#check3')
// console.log(check3.value);



// users.filter((value) => {
//     if(value.age === false){
//         console.log(value);
//     }  
// })


// users.filter((value) => {
//     if(value.age >= 29){
//         console.log(value);
//     }    
// })

// users.filter((value) => {
//     if(value.address.city === 'Kyiv'){
//         console.log(value);
//     }    
// })


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


let bold = document.querySelector('#content');
bold.onselect = (ev) =>{
    console.log(ev);
}
// console.log(bold);
// bold.onselectionchange((ev) => {
//     console.log(ev);
// })
