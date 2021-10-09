let calculator = () => {
    const entrys = [];
    let operator = '';
    let history = [];
    
    let sum = (value1, value2) => value1 + value2;
    let substract = (value1, value2) => value1 - value2;
    let multiply = (value1, value2) => value1 * value2;
    let divide = (value1, value2) => value1 / value2;

    const enter = (value) => {
        if(typeof value === 'number') {
            entrys.push(value)
        } else {
            operator = value;
        }
    }

    const calcHandler = {
        '+': sum,
        '-': substract,
        '*': multiply,
        '/': divide,
    }

    const equals = (array) => {
        const [value1 ,value2] = array;
        history.push(`History is '${value1} ${operator} ${value2}'`);
        let result = calcHandler[operator] ? calcHandler[operator](value1, value2) : 'Invalid operator...'
        return result;
    }

    const list = () => {
        return history;
    }

    const reset = () => {
        while(entrys.length > 0) {
            entrys.pop();
        }
        operator = '';
    }
    
    return {
        entrys,
        enter,
        equals,
        list,
        reset
    }
};

let calc = calculator();

console.log(calc.enter(5));
console.log(calc.enter('+'));
console.log(calc.enter(2));
console.log(calc.equals(calc.entrys));
console.log(calc.enter(5));
console.log(calc.enter('-'));
console.log(calc.enter(2));
console.log(calc.equals(calc.entrys));
console.log(calc.enter(5));
console.log(calc.enter('*'));
console.log(calc.enter(2));
console.log(calc.equals(calc.entrys));
console.log(calc.list());
console.log(calc.reset());