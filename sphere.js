function calculateArea() {
    // Get the length and width values
    // var length= document.getElementById("length").value;
    var radius = document.getElementById("radius").value;
    // var height = document.getElementById("height").value;
    
    // Get the length and width units
    var radiusUnit = document.getElementById("radiusUnit").value;
    // var widthUnit = document.getElementById("widthUnit").value;
    // var heightUnit = document.getElementById("heightUnit").value;
    
    // Convert the length and width values to meters
    var radiusMeters = convertToMeters(radius, radiusUnit);
    // var widthMeters = convertToMeters(width, widthUnit);
    // var heightMeters = convertToMeters(height, heightUnit);
    
    // var a=base1Meters + base2Meters;
    // var b= a*0.5;
    // var c= b * heightMeters;
    
    // Calculate the area in square meters
    if(radius>=0)
    {
    var volumeMeters = 1.33 * 3.14159* radiusMeters*radiusMeters* radiusMeters;
    }

    else
    {
      document.getElementById("cubicMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";

    }
    // Convert the area to square feet and square inches
    var volumeCenti = convertToCenti(volumeMeters);
    var volumeKilo = convertToKilo(volumeMeters);
    
    // Display the results
    if(radiusUnit==="meters"  ){
    document.getElementById("cubicMeters").innerHTML = "Volume: " + volumeMeters.toFixed(2) + " cubic meters";
    }
    else if(radiusUnit==="centimeters" ){
    document.getElementById("cubicCentimeters").innerHTML = "Volume: " + volumeCenti.toFixed(2) + " cubic centimeters";
    }
    else if(radiusUnit==="kilometers"  ){
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
  