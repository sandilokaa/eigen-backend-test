function countFrequency(input, query){
    const result = [];

    for (const word of query) {
        const count = input.filter(item => item === word).length;
        result.push(count);
    }

    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz']  
const QUERY = ['bbb', 'ac', 'dz']  

console.log(countFrequency(INPUT, QUERY));