const input = 'string';

const invertir = (input) => {
    const long = input.length;
    const invert = input.split('').reverse().join('');
    return `'${long} ${invert}'`;
};

invertir(input); // '6 gnirts'
console.log(invertir(input));

const input2 = 'variable';
invertir(input2);
console.log(invertir(input2)); // '8 elbairav'

const input3 = 'pointer';
invertir(input3);
console.log(invertir(input3)); // '7 retniop'

