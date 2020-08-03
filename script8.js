// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


// let area = document.querySelector('#text');

// console.log(area.value);

// localStorage.setItem('textarea',JSON.stringify(area.value));
// console.log(localStorage);

// area.oninput = ()=>{
//     localStorage.setItem(area.id,area.value) 
// }

// area.value = localStorage.getItem(area.id)

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.


// let text = document.querySelector('#text');
// let check = document.getElementById('tick');
// let radio = document.getElementsByClassName('dot1')
// let radio2 = document.getElementsByClassName('dot2')


// text.oninput = ()=>{
//     localStorage.setItem(text.id,text.value) 
// }
// check.onclick = ()=>{
//     localStorage.setItem(check.id,check.checked)
    
// }

//     radio.onclick = ()=>{
//         localStorage.setItem(radio.id,radio.checked)
//   }

// let select = document.querySelector('.slc');
// let one = document.querySelector('.one');
// let two = document.querySelector('.two');

// select.onclick = ()=>{
//     localStorage.setItem(select.id,select.option)
// }

// select.option = localStorage.getItem(select.id);


// radio.checked = localStorage.getItem(radio.id) === 'true' ? true : false;
// check.checked = localStorage.getItem(check.id) === 'true' ? true : false;

// text.value = localStorage.getItem(text.id) 



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикcируются" (в хранилище),
//  затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории 
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let txt = document.querySelector('#txt')

// txt.value = localStorage.getItem(txt.id)

// localStorage.setItem(txt.id, txt.value)


// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let save = document.getElementById('save');

// let step = 0;


// txt.oninput = ()=>{
    
//     step = localStorage.length
//     localStorage.setItem('step' + step,txt.value);
//     console.log(step);
// }
// save.onclick = ()=>{
//     localStorage.setItem(txt.id,txt.value)
    
// }
// left.onclick = function () {
//     step--;
//     txt.value = localStorage.getItem('step'+step,txt.value)
//     if(step<0){
//         alert('u dont have history')
//     }
//     console.log(step);
// }

// right.onclick = function () {
//     step++;
//     txt.value = localStorage.getItem('step'+step,txt.value)
//     if(step>localStorage.length){
//         alert('u dont have history(2)')
//     }
// }














// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все
//  необходимые инпуты для редактирования, которые уже заполнены данными объекта
let add = document.getElementById('add');

add.onclick = ()=>{
    document.body.innerHTML = 'name:' + name.value + '<br>' + 'age:' + age.value + '<br>' + 'work:' + work.value + '<br>'+'kind:' + kind.value + '<br>' + 'hb:' + hb.value +'<br>'+ '<button> change</button>';
    
}



let name = document.querySelector('#name')
localStorage.getItem(name.id,name.value)
name.oninput = ()=>{
    localStorage.setItem(name.id,name.value)
}
name.value = localStorage.getItem(name.id)


let age = document.querySelector('#age')
localStorage.getItem(age.id,age.value)
age.oninput = ()=>{
    localStorage.setItem(age.id,age.value)
}
age.value = localStorage.getItem(age.id)


let work = document.querySelector('#work')
localStorage.getItem(work.id,work.value)
work.oninput = ()=>{
    localStorage.setItem(work.id,work.value)
}
work.value = localStorage.getItem(work.id)


let kind = document.querySelector('#kind')
localStorage.getItem(kind.id,kind.value)
kind.oninput = ()=>{
    localStorage.setItem(kind.id,kind.value)
}
kind.value = localStorage.getItem(kind.id)

let hb = document.querySelector('#hb')
localStorage.getItem(hb.id,hb.value)
hb.oninput = ()=>{
    localStorage.setItem(hb.id,hb.value)
}
hb.value = localStorage.getItem(hb.id)











