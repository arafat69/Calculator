
var result = calculator.screen;

function insertValue(e) {
    result.value = result.value += e;
}

function mathcalculation() {
    if (result.value != '') {
        result.value = eval(result.value)
    }
}

function calculationClean(){
    result.value ='';
}

function mathrouth(){
    result.value=Math.sqrt(result.value)
}
function backspace(){
    result.value=result.value.slice(0,-1);
}