// function task 2

export function getPercents(percent, number) {
    let result;
    if ((!isNaN(percent))&&(!isNaN(number))){
        result = number/100*percent;
    } else {
        result = 'введите число';
    }
    return result;
}