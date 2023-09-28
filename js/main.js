function formatMoney(num) {
    let money;
    money = num.toString();

    let moneyArr = money.split('');
    console.log(moneyArr);

    for (let i = 0; i < moneyArr.length; i++) {
        if (i > 0 && i % 3 === 0) {
            console.log(moneyArr[moneyArr.length - 1 - i] = moneyArr[moneyArr.length - 1 - i] + ',');
        }

    }

    money = moneyArr.join('');

    return money;
}

console.log('itog: ' + formatMoney(1234));


