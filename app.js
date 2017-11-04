const secondName = prompt('Введите фамилию: ');
const firstName = prompt('Введите имя: ');
const patronymic = prompt('Введите отчество: ');
let monthArray = [];
monthArray[0]="январь";
monthArray[1]="февраль";
monthArray[2]="март";
monthArray[3]="апрель";
monthArray[4]="май";
monthArray[5]="июнь";
monthArray[6]="июль";
monthArray[7]="август";
monthArray[8]="сентябрь";
monthArray[9]="октябрь";
monthArray[10]="ноябрь";
monthArray[11]="декабрь";
const year = prompt('Введите Год: ');
let month;
let day;
let numberOfMonth = 0;

checkMonth();
function checkMonth() {
     month = prompt('Введите Месяц(строкой): ');
     month = month.toLowerCase();
    for (let i = 0; i < monthArray.length; i++) {
        if (monthArray[i] === month) {
            numberOfMonth = i + 1;
        }
    }
    if (!numberOfMonth) {
        checkMonth();
    }
}

checkDay();
function checkDay() {
    day = prompt('Введите День: ', '');
    const daysInMonth = new Date(year, numberOfMonth, 0).getDate();
    if (day > daysInMonth || !day) {
        checkDay();
    } else {
        console.log('daysInMonth', daysInMonth);
    }
}

let thisIsMan;
let gender;

checkGender();
function checkGender() {
    gender = prompt('Пол:', '');
    if(gender === 'муж' || gender === 'мужской'){
       thisIsMan = true;
    } else if(gender === 'жен' || gender ==='женский'){
        thisIsMan = false;
    } else {
        checkGender();
    }
}
let addressArray = ['г.', 'с.', 'д.'];
let locality;

checkAddress();

function checkAddress () {
    let address = prompt('Введите тип населённого пункта цифрой: 1-город, 2-село, 3-деревня', '');
    if(address < 4 && address > 0) {
        for( let i = 1; i <= addressArray.length; i++) {
            if (address == i) {
                locality = addressArray[i - 1];
            }
        }
    } else {
        checkAddress();
    }
}
const yourCity = prompt('Введите населённый пункт:', '');
let streetArray = ['ул.', 'бул.', 'просп.', 'пл.'];
let streetLocality;

checkStreet();
function checkStreet () {
    let street = prompt('Введите тип улицы цифрой: 1-улица, 2-бульвар, 3-проспект, 4-площадь', '');
    if(street < 5 && street > 0) {
        for( let i = 1; i <= streetArray.length; i++) {
            if (street == i) {
                streetLocality = streetArray[i - 1];
            }
        }
    } else {
        checkStreet();
    }
}
const yourStreet = prompt('Введите улицу:', '');
const yourHome = prompt('Введите дом:', '');

function checkPension() {
    let age = 2017 - year;
    let onPension;
    if(thisIsMan && age > 59 && age > 0) {
        onPension = 'Да';
    } else if(!thisIsMan && age > 54 && age > 0){
        onPension = 'Да';
    } else {
        onPension = 'Нет';
    }
     return onPension;
}
alert('ФИО: ' + secondName + ' ' + firstName + ' ' + patronymic + '\nДата: ' + day  + ' ' + month + ' ' + year +
        '\nПол: ' + gender + '\nМесто: ' + locality + ' ' + yourCity + ',' + streetLocality + ' ' + yourStreet + ', ' + yourHome +
        '\nНа пенсии: ' + checkPension() );
