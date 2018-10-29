
function setResult(value){
    document.getElementById('result').innerHTML = value;
}

function add(value){
    var result = getResult();
    setResult(result + value);
}

function getResult(){
    return(document.getElementById('result').innerHTML);
}

function calc(){
    setResult(eval(getResult()));
}
