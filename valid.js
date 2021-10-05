
function welcome(){
    alert("welcome to my website");
}
function fncValidate ()
{
    
    var fe=document.form1.femail.value;
    var fn=document.form1.fname.value;
    var es=document.form1.esub.value;
    var ea=document.form1.eaddre.value;

var atpos=fe.indexOf("@");
var dotpos=fe.lastIndexOf(".");
if(atpos<1 || dotpos<atpos+2 || dotpos+2>=fe.length)
{
    alert('please input the valid From E-mail');
    return false;

}
if(fn=="")
{
    alert("please input the from name");
    return false;
}
    if(fn==null || fn==true)
    {
        alert('enter only alphabet for from name');

    }
if(es=="")
{
    alert("please input the email subject");
    return false; 
}
var atpos=ea.indexOf("@");
var dotpos=ea.lastIndexOf(".");
if(atpos<1 || dotpos<atpos+2 || dotpos+2>=ea.length)
{
    alert('please input the valid E-mail subject');
    return false;

} 
alert("successfully registered.");
document.form1.Submit();
}
