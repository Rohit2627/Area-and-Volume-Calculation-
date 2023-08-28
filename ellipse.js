function calculateArea() {
    // Get the length and width values
    var major = document.getElementById("major").value;
    var minor = document.getElementById("minor").value;
    var PI=3.14159;
    
    // Get the length and width units
    var majorUnit = document.getElementById("majorUnit").value;
    var minorUnit = document.getElementById("minorUnit").value;
    
    // Convert the length and width values to meters
    var majorMeters = convertToMeters(major, majorUnit);
    var minorMeters = convertToMeters(minor, minorUnit);
    
    // Calculate the area in square meters
    if(major>=0 && minor>=0)
    {
    var areaMeters = PI * (majorMeters * minorMeters);
    }

    else
    {
      document.getElementById("squareMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";

    }
    // Convert the area to square feet and square inches
    var areaCenti = convertToCenti(areaMeters);
    var areaKilo = convertToKilo(areaMeters);
    
    // Display the results
    if(majorUnit==="meters" && minorUnit==="meters"){
    document.getElementById("squareMeters").innerHTML = "Area: " + areaMeters.toFixed(2) + " square meters";
    }
    else if(majorUnit==="centimeters" && minorUnit==="centimeters"){
    document.getElementById("squareCentimeters").innerHTML = "Area: " + areaCenti.toFixed(2) + " square centimeters";
    }
    else if(majorUnit==="kilometers" && minorUnit==="kilometers"){
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
  