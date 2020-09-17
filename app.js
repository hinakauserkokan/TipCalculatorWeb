//function definition
function myFunction(){
    
    //var is a variable 
    //document is because js is a dom
    var bamount = parseInt(document.getElementById("bamount").value);
    var service = parseInt(document.getElementById("service").value);
    var peopleCount =parseInt(document.getElementById("peopleCount").value);

    var tip = ((bamount/100)*service)/peopleCount;

    //bt is the short form of bill and tip amount
    var bt = (bamount/peopleCount) + tip;

    if(service === NaN)
        alert("Enter the details")
    else
        //alert is the top dialog box 
        alert("Each pay "+bt+" rupees");

}