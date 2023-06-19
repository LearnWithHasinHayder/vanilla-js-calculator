const Calculator = {
    add(x,y){
        return parseInt(x)+parseInt(y)
    },
    sub(x,y){
        return x-y
    },
    mul(x,y){
        return x*y
    },
    div(x,y){
        return x/y
    },
    calculate(e1,e2,operation){
        const x  = document.getElementById(e1).value
        const y  = document.getElementById(e2).value
        let result = 0;
        if('add'==operation){
            result = this.add(x,y)
        }else if('sub'==operation){
            result = this.sub(x,y)
        }else if('mul'==operation){
            result = this.mul(x,y)
        }else if('div'==operation){
            result = this.div(x,y)
        }
        document.getElementById('result').value = result
    }
}
export {Calculator}