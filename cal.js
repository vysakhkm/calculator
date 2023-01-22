var outputScreen=document.getElementById("output-screen");
function display(num)
{
    outputScreen.value+=num;
}
function calculate()
{
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function clearscreen()
{
    outputScreen.value="";
}
function del()
{
    outputScreen.value=outputScreen.value.slice(0,-1);
}
function sin()
{
    outputScreen.value=Math.sin(outputScreen.value*(Math.PI/180));
}
function cos()
{
    outputScreen.value=Math.cos(outputScreen.value*(Math.PI/180));
}
function tan()
{
    outputScreen.value=Math.tan(outputScreen.value*(Math.PI/180));
}
function log(){
    outputScreen.value=Math.log10(outputScreen.value);
}
function e(){
    outputScreen.value=(outputScreen.value)*2.7182818;
}
function root(){
    outputScreen.value=Math.sqrt(outputScreen.value);
}
function pi(){
    outputScreen.value=(outputScreen.value)*3.14159;
}
function ln(){
    outputScreen.value=Math.log(outputScreen.value)
}

function raise(){
    outputScreen.value=Math.log10(outputScreen.value);
}
function squareroot()
{
    outputScreen.value=Math.pow(outputScreen.value,1/2);
}
function square()
{
    outputScreen.value=Math.pow(outputScreen.value,2);
}

