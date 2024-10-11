function getValue(matrix) {
    let sum = 0;

    for (let i = 0, l = matrix.length; i < l; i++) {
        sum += matrix[i][i] - matrix[i][l - i - 1];
    }

    return sum;
}

const matrix = [
    [1, 2, 0], 
    [4, 5, 6], 
    [7, 8, 9]
];

console.log(getValue(matrix));