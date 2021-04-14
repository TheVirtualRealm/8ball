function MagicResponse(){
    let randomNumber = Math.floor(Math.random() * 11);
    var input = document.getElementById('Question').value;
    document.getElementById('questionAsked').innerHTML = ('You have asked a question ' + input);
    console.log(randomNumber)

switch(randomNumber){
    case 0:
        console.log("yes")
        document.getElementById("response").innerHTML=("response");
        break;


        case 1:
        console.log("absolutely")
        document.getElementById("response").innerHTML=("absolutely");
        break;


        case 2:
        console.log("of course")
        document.getElementById("response").innerHTML=("of course");
        break;


        case 3:
        console.log("no")
        document.getElementById("response").innerHTML=("no");
        break;


        case 4:
        console.log("not a chance")
        document.getElementById("response").innerHTML=("not a chance");
        break;


        case 5:
        console.log("Ill think about it")
        document.getElementById("response").innerHTML=("Ill think about it");
        break;


        case 6:
        console.log("absoltely not")
        document.getElementById("response").innerHTML=("absoltely not");
        break;


        case 7:
        console.log("STOP ASKING ME QUESTIONS")
        document.getElementById("response").innerHTML=("STOP ASKING ME QUESTIONS");
        break;


        case 8:
        console.log("PLEASE LEAVE ME ALONE")
        document.getElementById("response").innerHTML=("PLEASE LEAVE ME ALONE");
        break;


        case 9:
        console.log("Theres a chance")
        document.getElementById("response").innerHTML=("Theres a chance");
        break;


        case 10:
        console.log("sure")
        document.getElementById("response").innerHTML=("sure");
        break;

}






}
