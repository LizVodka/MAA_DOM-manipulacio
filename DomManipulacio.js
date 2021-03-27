window.addEventListener("load",init);

/*rövidítő függvények*/
function ID(nev) {
    return document.getElementById(nev)
} 

function $(nev) {
    return document.querySelectorAll(nev)
} 

var nevek = ["Gizi", "Juli", "Béla", "Jenő"];

function init() {
    /*Elemek hozzáadása a HTML-hez*/
    ID("adat").innerHTML = "Szép szombatot!";
    $("nav")[0].innerHTML += "<ul></ul>";
    for (var i = 0; i < nevek.length; i++) {
        $("nav ul")[0].innerHTML += "<li>" + nevek[i] + "</li>";
    }

    /*elemek formázása inline stílussal*/
    $("nav li")[0].style.color="blue";
    $("nav li")[1].style.backgroundColor="green";

    /*események kezelése*/
    for (var i = 0; i <  $("nav li").length; i++) {
        $("nav li")[i].addEventListener("click", kattintasKezeles);
        $("nav li")[i].addEventListener("mouseover", egerFelette);
        $("nav li")[i].addEventListener("mouseout", egerLe);
    }
}

function kattintasKezeles() {
    this.innerHTML = "Másik Gizi";
}

function egerFelette() {
    this.classList.add("formazas");
}

function egerLe() {
    this.classList.remove("formazas");
}