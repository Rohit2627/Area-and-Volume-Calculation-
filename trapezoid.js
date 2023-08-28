function calculateArea() {
    // Get the length and width values
    var base1= parseFloat( document.getElementById("base1").value);
    var base2 = parseFloat(document.getElementById("base2").value);
    var height = parseFloat(document.getElementById("height").value);
    
    // Get the length and width units
    var base1Unit = document.getElementById("base1Unit").value;
    var base2Unit = document.getElementById("base2Unit").value;
    var heightUnit = document.getElementById("heightUnit").value;
    
    // Convert the length and width values to meters
    var a = convertToMeters(base1, base1Unit);
    var b = convertToMeters(base2, base2Unit);
    var h = convertToMeters(height, heightUnit);
    
    // var a=base1Meters + base2Meters;
    // var b= a*0.5;
    // var c= b * heightMeters;
    
    if(base1>=0 && base2>=0 && height>=0)
    {
    var z= (a+b)*h;
    // Calculate the area in square meters
    var areaMeters = 0.5*z; 
    }

    else{
      document.getElementById("squareMeters").innerHTML = "The size is not valid.Please enter the non negative dimensions";

    }
    // Convert the area to square feet and square inches
    var areaCenti = convertToCenti(areaMeters);
    var areaKilo = convertToKilo(areaMeters);
    
    // Display the results
    if(base1Unit==="meters" && base2Unit==="meters" && heightUnit==="meters"){
    document.getElementById("squareMeters").innerHTML = "Area: " + areaMeters.toFixed(2) + " square meters";
    }
    else if(base1Unit==="centimeters" && base2Unit==="centimeters" && heightUnit==="centimeters"){
    document.getElementById("squareCentimeters").innerHTML = "Area: " + areaCenti.toFixed(2) + " square centimeters";
    }
    else if(base1Unit==="kilometers" && base2Unit==="kilometers" && heightUnit==="kilometers"){
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
  