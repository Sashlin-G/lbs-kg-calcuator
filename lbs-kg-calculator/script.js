

function convertWeight() {

    let parent = document.getElementById("parent").value;
    
    if (!isNaN(parent) && parent !== "") {
      let kg = parent * 0.453592;

      document.getElementById("result").innerHTML = parent + " lbs = " + kg.toFixed(2) + " kg";
    } else {
      // Display an error message if the input is invalid
      document.getElementById("result").innerHTML = "Please enter a valid weight in pounds.";
    }
  }