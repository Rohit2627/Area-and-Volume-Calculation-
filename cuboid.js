function calculateArea() {
    // Get the length and width values
    var length= document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    
    // Get the length and width units
    var lengthUnit = document.getElementById("lengthUnit").value;
    var widthUnit = document.getElementById("widthUnit").value;
    var heightUnit = document.getElementById("heightUnit").value;
    
    // Convert the length and width values to meters
    var lengthMeters = convertToMeters(length, lengthUnit);
    var widthMeters = convertToMeters(width, widthUnit);
    var heightMeters = convertToMeters(height, heightUnit);
    
    // var a=base1Meters + base2Meters;
    // var b= a*0.5;
    // var c= b * heightMeters;
    
    // Calculate the area in square meters
    if(length>=0 && width>=0 && height>=0)
    {
    var volumeMeters = lengthMeters*widthMeters* heightMeters;
    }

    else
    {
      document.getElementById("cubicMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";
      
    }
    // Convert the area to square feet and square inches
    var volumeCenti = convertToCenti(volumeMeters);
    var volumeKilo = convertToKilo(volumeMeters);
    
    // Display the results
    if(lengthUnit==="meters" && widthUnit==="meters" && heightUnit==="meters"){
    document.getElementById("cubicMeters").innerHTML = "Volume: " + volumeMeters.toFixed(2) + " cubic meters";
    }
    else if(lengthUnit==="centimeters" && widthUnit==="centimeters" && heightUnit==="centimeters"){
    document.getElementById("cubicCentimeters").innerHTML = "Volume: " + volumeCenti.toFixed(2) + " cubic centimeters";
    }
    else if(lengthUnit==="kilometers" && widthUnit==="kilometers" && heightUnit==="kilometers"){
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
  