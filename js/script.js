
var stateBirth=0;
var statePhone=0;
var stateChild=0;
var stateElec=0;
var stateInternet=0;

function ausblendenBirth() {
    if (stateBirth == 0){
        var elements = document.getElementsByClassName("birth");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateBirth = 1;
    }
    else {
        var elements = document.getElementsByClassName("birth");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "initial";
        }
        stateBirth = 0;
    }
}
function ausblendenPhone() {
    if (statePhone == 0){
        var elements = document.getElementsByClassName("phones");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        statePhone = 1;
    }
    else {
        var elements = document.getElementsByClassName("phones");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "initial";
        }
        statePhone = 0;
    }
}
function ausblendenChild() {
    if (stateChild == 0){
        var elements = document.getElementsByClassName("childs");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateChild = 1;
    }
    else {
        var elements = document.getElementsByClassName("childs");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "initial";
        }
        stateChild = 0;
    }
}
function ausblendenElec() {
    if (stateElec == 0){
        var elements = document.getElementsByClassName("electric");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateElec = 1;
    }
    else {
        var elements = document.getElementsByClassName("electric");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "initial";
        }
        stateElec = 0;
    }
}
function ausblendenInternet() {
    if (stateInternet == 0){
        var elements = document.getElementsByClassName("internet");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "hidden";
            elements[i].style.display = "none";
        }
        stateInternet = 1;
    }
    else {
        var elements = document.getElementsByClassName("internet");
        for(var i = 0; i != elements.length; ++i)
        {
            elements[i].style.visibility= "visible";
            elements[i].style.display = "initial";
        }
        stateInternet = 0;
    }
}