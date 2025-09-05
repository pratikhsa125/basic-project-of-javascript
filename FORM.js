function formvalidation(){
    var name = document.forms["registerForm"] ["name"].value;
    var name = document.forms["registerForm"] ["email"].value;
    var name = document.forms["registerForm"] ["pan"].value;
    var name = document.forms["registerForm"] ["loanamount"].value;
}
function addnwecaptcha(){
    var a=Math.floor(Math.random()*10);
    var b=Math.floor(Math.random()*100);
    var c=Math.floor(Math.random()*1000);
  document.getElementById("captcha").innerHTML=`${a}+${b}*${c}`;
  eval
}
 var x= Math.floor(Math.random()*10000);
 console.log(x);