function add(){
    var a=parseInt(document.getElementById("n11").value);
    var b=parseInt(document.getElementById("n22").value);
    document.getElementById("res").textContent = a+b;


}
function sub(){
    var a=parseInt(document.getElementById("n11").value);
    var b=parseInt(document.getElementById("n22").value);
    document.getElementById("res").textContent = a-b;
}
function mul(){
    var a=parseInt(document.getElementById("n11").value);
    var b=parseInt(document.getElementById("n22").value);
    document.getElementById("res").textContent = a*b;
}
function div(){
    var a=parseInt(document.getElementById("n11").value);
    var b=parseInt(document.getElementById("n22").value);
    document.getElementById("res").textContent = a/b;
}