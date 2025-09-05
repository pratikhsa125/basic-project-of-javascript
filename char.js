 function checkchartype(){
    var a=document.getElementById("char").value;
    switch(a.toUpperCase()){
        case'A':
        case'E':
        case'I':
        case'O':
        case'U':
        document,getElementById("p1").innerHTML="vowel";
        break;
        default:
            document,getElementById("p1").innerHTML="consonent";
    }
 }