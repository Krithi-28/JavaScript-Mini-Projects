function insert(num){
    document.display.textview.value=document.display.textview.value + num;
}
function equal(){
    var exp=document.display.textview.value;
    if (exp)
    {
        document.display.textview.value=eval(exp)
    }
}
function backspace()
{
    var exp=document.display.textview.value;
    document.display.textview.value=exp.substring(0,exp.length-1)
}