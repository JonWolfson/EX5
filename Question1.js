window.onload =  function() {
  let btn1 = document.getElementById("compute");
  let btn2 = document.getElementById("clear");
  btn1.onclick = function () {
    let pointsEarned = 0;
    let pointsTotal = 0;
    let earnedInputs = document.getElementsByClassName("earned");
    let maxInputs = document.getElementsByClassName("max");

    for(let i = 0; i<earnedInputs.length; i++) {
      pointsEarned += parseInt(earnedInputs[i].value);
    }

    for(let i = 0; i<maxInputs.length; i++) {
      pointsTotal += parseInt(maxInputs[i].value);
    }

    if(document.getElementById("curve").checked) {
      pointsEarned += pointsTotal/20;
    }

    let result = document.createElement("div");
    if(pointsEarned/pointsTotal >= .6) {
      result.className = "pass";
    }
    else {
      result.className = "fail";
    }

    let score = document.createElement("p");
    let node = document.createTextNode(pointsEarned/pointsTotal * 100);
    score.appendChild(node);
    result.appendChild(score);
    document.getElementById("resultsarea").appendChild(result);
  };
  btn2.onclick = function () {
    let earnedInputs = document.getElementsByClassName("earned");
    let maxInputs = document.getElementsByClassName("max");
    
    for(let i = 0; i<earnedInputs.length; i++) {
    earnedInputs[i].value = "";
    }

    for(let i = 0; i<maxInputs.length; i++) {
      earnedInputs[i].value = "";
    }
  }
}
