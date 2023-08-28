function calculateArea() {
    // Get the length and width values
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    
    // Get the length and width units
    var lengthUnit = document.getElementById("lengthUnit").value;
    var widthUnit = document.getElementById("widthUnit").value;
    
    // Convert the length and width values to meters
    var lengthMeters = convertToMeters(length, lengthUnit);
    var widthMeters = convertToMeters(width, widthUnit);
    
    // Calculate the area in square meters
    if(length>=0 && width>=0)
    {
    var areaMeters = lengthMeters * widthMeters;
    }

    else{
      document.getElementById("squareMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";

    }
    // Convert the area to square feet and square inches
    var areaCenti = convertToCenti(areaMeters);
    var areaKilo = convertToKilo(areaMeters);
    
    // Display the results
    
    if(lengthUnit==="meters" && widthUnit==="meters"){
    document.getElementById("squareMeters").innerHTML = "Area: " + areaMeters.toFixed(2) + " square meters";
    }
    else if(lengthUnit==="centimeters" && widthUnit==="centimeters"){
    document.getElementById("squareCentimeters").innerHTML = "Area: " + areaCenti.toFixed(2) + " square centimeters";
    }
    else if(lengthUnit==="kilometers" && widthUnit==="kilometers"){
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
  