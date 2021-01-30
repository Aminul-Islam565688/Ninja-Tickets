//to make Input Value Read Only
document.getElementById("FirstClass-Cost").readOnly = true;
document.getElementById("Economy-Cost").readOnly = true;
document.getElementById("Economy-Center-Input").readOnly = true;
document.getElementById("FirstClass-Center-Input").readOnly = true;


//
function button(ticketClass,buttonCase){
    let flightClass = document.getElementById(ticketClass+"-Center-Input").value;
    let flightClassNumber = parseInt(flightClass);
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
    document.getElementById(ticketClass+"-Cost").value=ticketCostTotal;
    document.getElementById(ticketClass+"-Center-Input").value=upDownNumber;
}


//String to Number Converting Function
function stringToNumber(ticketClass){
    let stringValue = 0;
    let stringToNumber = 0;
    if(ticketClass == "FirstClass" || ticketClass == "Economy"){
        stringValue = document.getElementById(ticketClass + "-Center-Input").value;
        stringToNumber = parseInt(stringValue);
        return stringToNumber;
    }
    else if(ticketClass == "FirstClass-Cost" || ticketClass == "Economy-Cost"){
        stringValue = document.getElementById(ticketClass).value;
        stringToNumber = parseInt(stringValue);
        return stringToNumber;
    }
    else if(ticketClass == "Sub-Total" || ticketClass == "Vat" || ticketClass == "Total"){
        stringValue = document.getElementById(ticketClass).innerText;
        stringToNumber = parseInt(stringValue);
        return stringToNumber;
    }
}
