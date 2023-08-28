function calculateVolume() {
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
    if(side>=0)
    {
    var volumeMeters = sideMeters* sideMeters * sideMeters;
    }

    else
    {
      document.getElementById("cubicMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";

    }
    // Convert the area to square feet and square inches
    var volumeCenti = convertToCenti(volumeMeters);
    var volumeKilo = convertToKilo(volumeMeters);
    
    // Display the results
    if(sideUnit==="meters"){
    document.getElementById("cubicMeters").innerHTML = "Volume: " + volumeMeters.toFixed(2) + " cubic meters";
    }
    else if(sideUnit==="centimeters"){
    document.getElementById("cubicCentimeters").innerHTML = "Volume: " +volumeCenti.toFixed(2) + " cubic centimeters";
    }
    else if(sideUnit==="kilometers"){
    document.getElementById("cubicKilometers").innerHTML = "Volume: " + volumeKilo.toFixed(2) + " cubic Kilometers";
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
  