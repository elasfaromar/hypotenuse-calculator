document.getElementById("submit").onclick = function(){
    document.getElementById("answer").innerHTML = "Side C: " + Math.sqrt(Math.pow(document.getElementById("a").value,2) + Math.pow(document.getElementById("b").value,2));
}