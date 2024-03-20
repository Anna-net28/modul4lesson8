'use strict'

function chooseYears(n, m) {
    const yearArray = [];
    for (var i = n; i <= m; i++) {
        yearArray.push(i);
    }
    let result = [];
    yearArray.forEach(function (year) {
        if (getLeapYear(year))
            result.push(year);
    });
    return result;
}

function getLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

console.log(chooseYears(1990, 2024)); 