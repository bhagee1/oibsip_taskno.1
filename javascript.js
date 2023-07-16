function display(v){
    document.getElementById("result").value+=v;
}
function del(){
    document.getElementById("result").value=document.getElementById("result").value.slice(0,-1);
}
function clearscreen(){
    document.getElementById("result").value="";
}
function sqrt(){
    var a=document.getElementById("result").vallue;
    var b=Math.sqrt(a);
    document.getElementById("result").value=b;
}
function calculate(){
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}