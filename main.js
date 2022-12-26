
var mark = +prompt('Введите свой возраст');
if (mark > 0 && mark <= 18) {
    console.log('Вы еще молоды,Вам нужно учиться');
} else if (mark >= 18 && mark <= 50) {
    console.log('Вам нужно работать');
} else if (mark >= 50 && mark <= 59) {
    console.log('Вам скоро на пенсию');
} else if (mark >= 59 && mark <= 100) {
    console.log('Вы пенсионер');
} else {
    console.log('Что-то пошло не так');
}



var day = +prompt('Введите время в цифрах');
switch (day) {
    case 0:
        alert('1 час ночи')
        break;
    case 1:
        alert('2 часа ночи')
        break;
    case 2:
        alert('2 часа ночи')
        break;
    case 3:
        alert('3 часа ночи')
        break;
    case 4:
        alert(' 4 часа утра')
        break;
    case 5:
        alert(' 5 часа утра')
        break;
    case 6:
        alert(' 6 часов утра')
        break;
    case 7:
        alert(' 7 часов утра')
        break;
    case 8:
        alert(' 8 часов утра')
        break;
    case 9:
        alert(' 9 часов утра')
        break;
    case 10:
        alert(' 10 часов утра')
        break;
    case 11:
        alert(' 11 часов утра')
        break;
    case 12:
        alert(' 12 часов дня')
        break;
    case 13:
        alert(' 13 часов дня')
        break;
    case 14:
        alert(' 14 часов дня')
        break;
    case 15:
        alert(' 15 часов дня')
        break;
    case 16:
        alert(' 16 часов дня')
        break;
    case 17:
        alert('17 часов дня')
        break;
    case 18:
        alert('18 часов вечера')
        break;
    case 19:
        alert('19 часов вечера')
        break;
    case 20:
        alert(' 20 часов вечера')
        break;
    case 21:
        alert('21 час вечер')
        break;
    case 22:
        alert('22 часа вечер')
        break;
    case 23:
        alert('23 часа ночи')
        break;

    default: {
        console.log('ошибка');
        break;
    }
}


var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if (a > b && a < c || a > c && a < b) {
    console.log('среднее число ' + a);
} else if (b > a && b < c || b > c && b < a) {
    console.log('среднее число ' + b);
} else if (c > a && c < b || c > b && c < a) {
    console.log('среднее число ' + c);
} else {
    console.log('Ошибка');
}
