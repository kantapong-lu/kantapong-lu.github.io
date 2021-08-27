let numList = []


function displayStats(list) {
    let sum = 0
    let average = 0
    let min = Math.min(...list)
    let max = Math.max(...list)
    for (i = 0; i < list.length; i++) {
        sum += list[i];
    }
    average += sum/list.length
    avg = average.toFixed(2)
    list.length != 0? alert(`For the list ${list}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`) : alert(`For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0`)
}

function readInput() {
    while (true) {
        let num = Number(prompt("Enter an integer (a negative integer to quit):"))
        if (Number.isInteger(num) && num >= 0) {
            numList.push(num)          
        } else if (num < 0) {
            return numList
        } else {
            continue
        }
    }
}
list = readInput()
displayStats(list)




