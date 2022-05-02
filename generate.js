function gen() {
    r1 = Math.floor(Math.random() * 4);
    r2 = Math.floor(Math.random() * 4);
    r3 = Math.floor(Math.random() * 4);
    r4 = Math.floor(Math.random() * 4);

    job = "";
    
    if (r1 == 0) {
        job = "Warrior"
      } else if (r1 == 2) {
        job = "Monk"
      } else if (r1 == 3) {
        job = "White Mage"
      } else {
        job = "Black Mage"
      }

    document.getElementById("demo").innerHTML = job;
    // expected output: 0, 1, 2 or 3.
    
    // var values = ["test","values","go","here"],
    var values = [r1,r1],
        valueToUse = values[Math.floor(Math.random() * values.length)];
    // do something with the selected value
    // alert(valueToUse);
    return(valueToUse);
}