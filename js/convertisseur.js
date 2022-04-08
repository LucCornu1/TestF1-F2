 //Fonction servant à convertir la monnaie   
function ConvMoney() {

    var numbr = document.getElementById("somme").value;
    var type = document.getElementById("typo").value;
    var typet = ["Réel","1","2","3","4"];

    console.log(numbr);
    console.log("value of type : "+type);
    numbr = parseInt(numbr);
    console.log(typeof(numbr));
    console.log(typeof(type));

// Un IF pour chaque mini-jeu vmoney= monnaie réelle && money1=monnaie virtuel/pièces
if (type == typet[0]) {
    console.log("la valeur de cette somme est une somme d'argent réel");
    
    money1 = 
    vmoney = money1/100;
    console.log(vmoney);
    console.log(numbr);

}

if (type == typet[1]) {
    if (numb>100) {
        console.log("la valeur de cette somme est une somme d'argent secondaire valant ")
        money1 = numbr;
        vmoney = money1/100;
    }
}
if (type == typet[2]) {
    console.log("la valeur de cette somme est une somme d'argent réel");
    money1 = numbr;
    vmoney = money1;

}
if (type == typet[3]) {
    console.log("la valeur de cette somme est une somme d'argent réel");
    money1 = numbr;
    vmoney = money1;

}
//Mini jeu acceptant le fait de 50pièce = 1r 
if (type == typet[4]) {
    if (numb)
        console.log("la valeur de cette somme est une somme d'argent secondaire valant 50 fois moins qu'un réel")
        money1 = numbr;
        vmoney = money1/50;
}
var tabsous =[vmoney, money1];
console.log(tabsous);
    
}