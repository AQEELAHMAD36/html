function getOptions(){
    var select = document.getElementById("mySelect");
    var length = select.options.length;
    alert("The dropdown list has " + length + " items.");
  
    for (var i = 0; i < length; i++){
      alert("Item " + (i+1) + ": " + select.options[i].text);
    }
  }