//improved version
const Calculator = {
    add(x, y) {
        return parseInt(x) + parseInt(y)
    },
    subtract(x, y) {
        return x - y
    },
    multiply(x, y) {
        return x * y
    },
    divide(x, y) {
        return x / y
    },
    calculate(n1element, n2element, operation) {
        const x = document.getElementById(n1element).value
        const y = document.getElementById(n2element).value
        let result = 0
        if ('add' == operation) {
            result = this.add(x, y)
        } else if ('subtract' == operation) {
            result = this.subtract(x, y)
        } else if ('multiply' == operation) {
            result = this.multiply(x, y)
        } else if ('divide' == operation) {
            result = this.divide(x, y)
        }
        document.getElementById('result').value = result
    }
}

export { Calculator }