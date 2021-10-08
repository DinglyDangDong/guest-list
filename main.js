var mainArray = [];
var mainArrayCompare = [];
function addNamesToList(){
    mainArray.push("<h3>" + document.getElementById("inp1").value + "</h3>");
    mainArrayCompare.push(document.getElementById("inp1").value );
    document.getElementById("display").innerHTML = mainArray.join(" ");
    console.log(mainArray)
}
function findNameInList(){
    var inp2 = document.getElementById("inp2").value;
    var j = 0;
    for(j = 0; j<mainArray.length; j++){
        if(inp2 == mainArrayCompare[j]){
            document.getElementById("displayResult").innerHTML = "<h3>" + "its on the list" + "</h3>";
        }else{
            document.getElementById("displayResult").innerHTML = "<h3>" + "nope not on the list" + "</h3>";
        }
    }
   console.log(mainArrayCompare);
}













