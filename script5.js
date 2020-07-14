// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

class Tag{
    constructor(name , action , atts ){
        this.name = name ;
        this.action = action ;
        this.atts = atts; 

    }
    log(){
        console.log(this);
    }

}

let a = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);
let div = new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);
let h1 = new Tag('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);
let span = new Tag('span','Тег <span> предназначен для определения строчных элементов документа.',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);
let input = new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);
let form = new Tag('form','Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);
let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);
let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',[{title:'acceskey',action:'Активация ссылки с помощью комбинации клавиш.'},{title:'coords',action:'Устанавливает координаты активной области.'}]);

// a.log();
// div.log();
// h1.log();
// span.log();
// input.log();
// form.log();
// option.log();
// select.log();

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


function Car(model , creator , year , maxSpeed , engine){
    this.model = model;
    this.creator = creator;
    this.year = year ;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function(){
        console.log(`${this.model} is driving ${this.maxSpeed} `);
    }
    this.info = function(){
        console.table(this);
    }
    this.increaseMaxSpeed = function () {
        newSpeed = this.maxSpeed + 20;
        console.log(`${newSpeed}`);
    }
    this.changeYear = function(){
        newValue = this.year + 2 ;
        console.log(newValue);
    }
    this.addDriver = function(){
        driver = {
            name:'Roman',
            age:'20'
        }
        console.table(driver);
    }
}

// let opel = new Car('opel','Aladin',2008,180,'v4');
// opel.drive();
// opel.info();
// opel.increaseMaxSpeed();
// opel.drive();
// opel.changeYear();
// opel.addDriver()




// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class Autos{
    constructor(model , creator , year , maxSpeed , engine){
        this.model = model;
        this.creator = creator;
        this.year = year ;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive(){
        console.log(`${this.model} is driving ${this.maxSpeed} `);
    }
    info(){
        console.table(this);
    }
    increaseMaxSpeed(){
        this.newSpeed = this.maxSpeed + 100;
        console.log(this.newSpeed);
    }
    changeYear(){
        this.newValue = this.year + 4 ;
        console.log(this.newValue);
    }
    addDriver(){
        this.driver = {
            name:'Andriy',
            age:'23'
        }
        console.table(this.driver);
    }
}
let tesla = new Autos('tesla','Ilon Mask',2016,300,'v8')

// tesla.drive();
// tesla.info();
// tesla.increaseMaxSpeed();
// tesla.changeYear();
// tesla.addDriver();



// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Girl{
    constructor(name,age,size){
        this.name = name;
        this.age = age;
        this.size = size;

    }
    prince(){
        this.boy = {
            name:'Oleg',
            age:21,
            size:39
        }

        

        if(this.boy.size === this.size){
            console.log('Yes');
        }else{
            console.log('NO');
        }
        
    }

}


let Anya = new Girl('Anya',19,39);
let Lena = new Girl('Lena',15,49);
let Vika = new Girl('Vika',24,32);
let Olia = new Girl('Olia',11,29);
let Tania = new Girl('Tania',21,15);
let Sveta = new Girl('Sveta',23,53);
let Katya = new Girl('Katya',75,382);
let Oksana = new Girl('Oksana',1,1);
let Liza = new Girl('Liza',56,387);
let Polina = new Girl('Polina',89,999);
let Nika = new Girl('Nika',6,27);



// Anya.prince();
// Lena.prince();
// Vika.prince();
// Olia.prince();
// Tania.prince();
// Sveta.prince();
// Katya.prince();
// Oksana.prince();
// Liza.prince();
// Polina.prince();
// Nika.prince();









