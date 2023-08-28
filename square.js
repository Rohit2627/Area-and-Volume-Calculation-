function calculateArea() {
    // Get the length and width values
    
    var side = document.getElementById("side").value;
    
   
    // var PI=3.0142;
    // var width = document.getElementById("width").value;
    
    // Get the length and width units
    var sideUnit = document.getElementById("sideUnit").value;
    // var widthUnit = document.getElementById("widthUnit").value;
    
    // Convert the length and width values to meters
    var sideMeters = convertToMeters(side, sideUnit);
    // var widthMeters = convertToMeters(width, widthUnit);
    
    // Calculate the area in square meters
    if(side>=0){
    var areaMeters = sideMeters * sideMeters;
    }

    else{
      document.getElementById("squareMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";
      // document.getElementById("squareCentimeters").innerHTML = "The size is not valid.";
      // document.getElementById("squareKilometers").innerHTML = "The size is not valid.";

    }
    // Convert the area to square feet and square inches
    var areaCenti = convertToCenti(areaMeters);
    var areaKilo = convertToKilo(areaMeters);
    
    // Display the results
    if(sideUnit==="meters"){
    document.getElementById("squareMeters").innerHTML = "Area: " + areaMeters.toFixed(2) + " square meters";
    }
    else if(sideUnit==="centimeters"){
    document.getElementById("squareCentimeters").innerHTML = "Area: " + areaCenti.toFixed(2) + " square centimeters";
    }
    else if(sideUnit==="kilometers"){
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
  