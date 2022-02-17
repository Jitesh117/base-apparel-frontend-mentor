function ValidateEmail(inputText)
{
let none = document.getElementById('none');
let nonetext = document.getElementById('nonetext');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
none.style.display = 'none';
nonetext.style.display = 'none';

return true;
}
else
{
document.form1.text1.focus();
none.style.display= 'inherit';
nonetext.style.display= 'inherit';
return false;
}

}