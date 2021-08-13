function evenNumbers(number) {

    const filtered = number.filter(($data) => $data % 2 === 0)
    console.log(filtered)
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])