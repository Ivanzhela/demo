function evenNumbers(arr) {
    return arr.filter(a => a % 2 == 0).length
    
}
console.log(evenNumbers([1, 5, 100, 10]))