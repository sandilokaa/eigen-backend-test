function reverseAlphabet(str){

    const lastChar = str.charAt(str.length - 1);

    const subStr = str.slice(0, -1);

    return subStr.split("").reverse().join("") + lastChar;
};

console.log(reverseAlphabet("EIGEN1"))