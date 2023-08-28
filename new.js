function calculateArea() {
    // Get the length and width values
    var radius = document.getElementById("radius").value;
    var PI=3.0142;
    // var width = document.getElementById("width").value;
    
    // Get the length and width units
    var radiusUnit = document.getElementById("radiusUnit").value;
    // var widthUnit = document.getElementById("widthUnit").value;
    
    // Convert the length and width values to meters
    var radiusMeters = convertToMeters(radius, radiusUnit);
    // var widthMeters = convertToMeters(width, widthUnit);
    
    // Calculate the area in square meters
    var areaMeters = PI* radiusMeters * radiusMeters;
    
    // Convert the area to square feet and square inches
    var areaCenti = convertToCenti(areaMeters);
    var areaKilo = convertToKilo(areaMeters);
    
    // Display the results
    if(radiusUnit==="meters"){
    document.getElementById("squareMeters").innerHTML = "Area: " + areaMeters.toFixed(2) + " square meters";
    }
    else if(radiusUnit==="centimeters"){
    document.getElementById("squareCentimeters").innerHTML = "Area: " + areaCenti.toFixed(2) + " square centimeters";
    }
    else if(radiusUnit==="kilometers"){
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
  