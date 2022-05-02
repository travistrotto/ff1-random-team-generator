function genJob() {
  randomValue = Math.floor(Math.random() * 6);
  if (randomValue == 0) {
    job = "Warrior"
  } else if (randomValue == 1) {
    job = "Thief"
  } else if (randomValue == 2) {
    job = "Monk"
  } else if (randomValue == 3) {
    job = "White Mage"
  } else if (randomValue == 4) {
    job = "Red Mage"
  } else {
    job = "Black Mage"
  }
  return job;
}

function gen() { 
    
    //Clear Previous
    document.getElementById("results").innerHTML = "";

    party1 = genJob();
    var p1 = document.createElement("IMG");
    p1.setAttribute("src", "img/"+randomValue+".png");
    document.getElementById("results").appendChild(p1);
    p1.setAttribute("width", "100px");
    document.getElementById("party1").innerHTML = party1 + ",";

    party2 = genJob();
    var p2 = document.createElement("IMG");
    p2.setAttribute("src", "img/"+randomValue+".png");
    document.getElementById("results").appendChild(p2);
    p2.setAttribute("width", "100px");
    document.getElementById("party2").innerHTML = party2 + ",";

    party3 = genJob();
    var p3 = document.createElement("IMG");
    p3.setAttribute("src", "img/"+randomValue+".png");
    document.getElementById("results").appendChild(p3);
    p3.setAttribute("width", "100px");
    document.getElementById("party3").innerHTML = party3 + ",";
    
    party4 = genJob();
    var p4 = document.createElement("IMG");
    p4.setAttribute("src", "img/"+randomValue+".png");
    p4.setAttribute("width", "100px");
    document.getElementById("results").appendChild(p4);
    document.getElementById("party4").innerHTML = party4 + ".<br>";
    team = 1;
    return(0);
}

