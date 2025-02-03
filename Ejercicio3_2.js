const input = 10;
const conversor = (input) => {
    const deformar = input.toString().split('').join('-');
    return deformar;
}
conversor(input); 
console.log(conversor(input)); // '1-0'
const secondInput = 1;
conversor(secondInput);
console.log(conversor(secondInput)); // '1'
const thirdInput = 11234;
conversor(thirdInput);
console.log(conversor(thirdInput)); // '1-1-2-3-4'