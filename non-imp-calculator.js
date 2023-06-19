const Calculator = {
    add(x,y){
        return parseInt(x)+parseInt(y)
    },
    subtract(x,y){
        return x-y
    },
    multiply(x,y){
        return x*y
    },
    divide(x,y){
        return x/y
    }
}

export {Calculator}