
var stateBirth=0;
var statePhone=0;
var stateChild=0;
var stateElec=0;
var stateInternet=0;

//Funktionen zum ein- und ausblenden
function ausblendenBirth() {
    //ausblenden: suchen nach Elementen, alle ausblenden und state setzen
    if (stateBirth == 0){
        var elements = document.getElementsByClassName("birth");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateBirth = 1;
    }
    //einblenden: suchen nach Elementen, alle einblenden und state setzen
    else {
        var elements = document.getElementsByClassName("birth");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "table-cell";
        }
        stateBirth = 0;
    }
}
function ausblendenPhone() {
    //ausblenden: suchen nach Elementen, alle ausblenden und state setzen
    if (statePhone == 0){
        var elements = document.getElementsByClassName("phones");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        statePhone = 1;
    }
    //einblenden: suchen nach Elementen, alle einblenden und state setzen
    else {
        var elements = document.getElementsByClassName("phones");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "table-cell";
        }
        statePhone = 0;
    }
}
function ausblendenChild() {
    //ausblenden: suchen nach Elementen, alle ausblenden und state setzen
    if (stateChild == 0){
        var elements = document.getElementsByClassName("childs");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateChild = 1;
    }
    //einblenden: suchen nach Elementen, alle einblenden und state setzen
    else {
        var elements = document.getElementsByClassName("childs");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "table-cell";
        }
        stateChild = 0;
    }
}
function ausblendenElec() {
    //ausblenden: suchen nach Elementen, alle ausblenden und state setzen
    if (stateElec == 0){
        var elements = document.getElementsByClassName("electric");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateElec = 1;
    }
    //einblenden: suchen nach Elementen, alle einblenden und state setzen
    else {
        var elements = document.getElementsByClassName("electric");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "table-cell";
        }
        stateElec = 0;
    }
}
function ausblendenInternet() {
    //ausblenden: suchen nach Elementen, alle ausblenden und state setzen
    if (stateInternet == 0){
        var elements = document.getElementsByClassName("internet");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateInternet = 1;
    }
    //einblenden: suchen nach Elementen, alle einblenden und state setzen
    else {
        var elements = document.getElementsByClassName("internet");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "table-cell";
        }
        stateInternet = 0;
    }
}
//Sortierfunktion nach Vorbild der W3School
function sortUp(n) {
    var table, rows, switching, i, x, y, shouldSwitch, switchcount = 0;
    //Tabelle suchen
    table = document.getElementById("table");
    switching = true;
    //Schleife für Sortiervorgang
    while (switching){
        switching = false;
        rows = table.rows;
        //durch Zeilen gehen und prüfen ob richtig sortiert, wenn nicht shouldSwitch setzen und Schleife beenden
        for (i = 1; i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch= true;
                break;
            }
        }
        //tauschen der zwei Spalten und switching setzen, da Sortiervorgang noch nicht beendet ist
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        }
    }
}

function sortDown(n) {
    var table, rows, switching, i, x, y, shouldSwitch, switchcount = 0;
    //Tabelle suchen
    table = document.getElementById("table");
    switching = true;
    //Schleife für Sortiervorgang
    while (switching){
        switching = false;
        rows = table.rows;
        //durch Zeilen gehen und prüfen ob richtig sortiert, wenn nicht shouldSwitch setzen und Schleife beenden
        for (i = 1; i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        //tauschen der zwei Spalten und switching setzen, da Sortiervorgang noch nicht beendet ist
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        }
    }
}

    /**************** responsive navbar  ******************/

    
   //looking for the elements
   let navbar = document.getElementById('navigation')
   let toggle = document.getElementById('toggle')
   // adding class "mobile" to navbar
   toggle.addEventListener("click", function(){
       navbar.classList.toggle('mobile')
   })