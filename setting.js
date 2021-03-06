//to make Input Value Read Only
readOnly("FirstClass-Cost");
readOnly("Economy-Cost");
readOnly("Economy-Center-Input");
readOnly("FirstClass-Center-Input");

function readOnly(Idname){
    document.getElementById(Idname).readOnly = true;
}


//Display None and Display Block Function
function display(id,boolean){
    let totalNumber = stringToNumber("Total")
    document.getElementById(id).style.display="none";
    if(totalNumber > 0){
        if(boolean==true){
            document.getElementById("processing-Tickets").style.display="block";
        }
        else if(boolean==false){
            document.getElementById("last-content").style.display="block";
        }
    }
    else if(totalNumber == 0){
        document.getElementById("Error-content").style.display="block";
    }
}
function error(){
    document.getElementById("Error-section").style.display="none";
    document.getElementById("flight-booking-form").style.display="block";
}

//Button Function for Increment and Decrement and Cost
function button(ticketClass,buttonCase){
    let flightClassNumber = stringToNumber(ticketClass)
    let upDownNumber = 0;
    if(buttonCase == true){
        upDownNumber = flightClassNumber +1;
    }
    else if(buttonCase == false && flightClassNumber > 0){
        upDownNumber = flightClassNumber -1;
    }
    let ticketCostTotal = 0;

    if(ticketClass == "FirstClass"){
        ticketCostTotal = 150*upDownNumber;
    }
    else{
        ticketCostTotal = 100*upDownNumber;
    }
    document.getElementById(ticketClass+"-Cost").value="$"+ticketCostTotal;
    document.getElementById(ticketClass+"-Center-Input").value=upDownNumber;
    calculator();
}

//Calculator
function calculator(){
    let firstClassTickets = stringToNumber("FirstClass");
    let economyClassTickets = stringToNumber("Economy");

    let subTotal = firstClassTickets*150 + economyClassTickets*100;
    document.getElementById("Sub-Total").innerText=subTotal;

    let vat = subTotal*0.1;
    document.getElementById("Vat").innerText=vat;

    let total = subTotal + vat;
    document.getElementById("Total").innerText=total;
}


//String to Number Converting Function
function stringToNumber(ticketClass){
    let stringValue = 0;
    let stringToNumber = 0;
    if(ticketClass == "FirstClass" || ticketClass == "Economy"){
        stringValue = document.getElementById(ticketClass + "-Center-Input").value;
    }
    else if(ticketClass == "FirstClass-Cost" || ticketClass == "Economy-Cost"){
        stringValue = document.getElementById(ticketClass).value;
    }
    else if(ticketClass == "Sub-Total" || ticketClass == "Vat" || ticketClass == "Total"){
        stringValue = document.getElementById(ticketClass).innerText;
    }
    stringToNumber = parseInt(stringValue);
    return stringToNumber;
}


//to Add Dollar Sign
dollarSign("FirstClass");
dollarSign("Economy");


//Dollar Function
function dollarSign(inputId){
    let addDollar = stringToNumber(inputId+"-Cost")
    document.getElementById(inputId+"-Cost").value="$"+addDollar;
}
