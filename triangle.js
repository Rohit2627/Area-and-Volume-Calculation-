function calculateArea() {
    // Get the length and width values
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    
    // Get the length and width units
    var baseUnit = document.getElementById("baseUnit").value;
    var heightUnit = document.getElementById("heightUnit").value;
    
    // Convert the length and width values to meters
    var baseMeters = convertToMeters(base, baseUnit);
    var heightMeters = convertToMeters(height, heightUnit);
    
    // Calculate the area in square meters
    if(base>=0 && height>=0)
    {
    var areaMeters = 0.5 * (baseMeters * heightMeters);
    }

    else{
      document.getElementById("squareMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";

    }
    // Convert the area to square feet and square inches
    var areaCenti = convertToCenti(areaMeters);
    var areaKilo = convertToKilo(areaMeters);
    
    // Display the results
    if(baseUnit==="meters" && heightUnit==="meters"){
    document.getElementById("squareMeters").innerHTML = "Area: " + areaMeters.toFixed(2) + " square meters";
    }
    else if(baseUnit==="centimeters" && heightUnit==="centimeters"){
    document.getElementById("squareCentimeters").innerHTML = "Area: " + areaCenti.toFixed(2) + " square centimeters";
    }
    else if(baseUnit==="kilometers" && heightUnit==="kilometers"){
    document.getElementById("squareKilometers").innerHTML = "Area: " + areaKilo.toFixed(2) + " square Kilometers";
    }
  }
  
  function convertToMeters(value, unit) {
    switch(unit) {
      case "meters":
        return value;
      case "centimeters":
        return value ;
      case "kilometers":
        return value ;
      default:
        return 0;
    }
  }
  
  function convertToCenti(value) {
    return value ;
  }
  
  function convertToKilo(value) {
    return value ;
  }
  