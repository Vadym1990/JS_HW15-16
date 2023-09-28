function formatMoney(num) {
    let money;
    money = num.toString();

    let moneyArr = money.split('');

    for (let i = 0; i < moneyArr.length; i++) {
        if (i > 0 && i % 3 === 0) {
            moneyArr[moneyArr.length - 3 - i] = moneyArr[moneyArr.length - 3 - i] + ',';
        }
    }
    moneyArr[moneyArr.length - 3] = moneyArr[moneyArr.length - 3] + '.';
    money = moneyArr.join('');

    return money;
}

console.log('itog: ' + formatMoney(12345));
console.log('itog: ' + formatMoney(1234567890));


