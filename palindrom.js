function palindrom(){
    var n= document;
    var temp=n;
    var rev=0;
    while(n!=0) {
        var rem=n%10;
        rev=(rev*10)+rem;
        n=parsent(n/10);
    }
    if(temp==rev){
        document.getElementById("p1").innerHTML ="palindrom";

    }
    else{
        document.getElementById("p1").innerHTML= " not palindrom";

    }

}