function showPrimes(n) {
    let listNum = []
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        listNum.push(i)
        
    }
    alert(`For n = ${n} prime numbers are ${listNum}`);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true
}

let num = Number(prompt("Enter a positive number"))
while (true) {
    if (Number.isInteger(num) && num > 1) {
        showPrimes(num)
        break
    }
    else {
        num = Number(prompt("Enter a positive number"))
    }
    
}


