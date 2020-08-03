// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то,
//  шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

let text = document.querySelector('#text')
let go = document.querySelector('#print')
let p = document.querySelector('#output')

function time(letter){
    return new Promise(resolve =>{
        setTimeout(()=>{
            p.innerHTML += letter
            resolve()
        },Math.floor(Math.random()*500)+100)
    })
}

go.onclick = async function(){
    for(let i=0;i<text.value.length;i++){
        await time(text.value[i])
    }
}








