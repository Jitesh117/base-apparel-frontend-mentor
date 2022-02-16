function ValidateEmail(inputText)
{
let none = document.getElementById('none');
let nonetext = document.getElementById('nonetext');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
none.style.display = 'none';
none.style.display = 'none'
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
none.style.display= 'inherit';
nonetext.style.display= 'inherit';
return false;
}

}