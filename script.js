/* Maximum bending moment for 
a simply supported beam = UDL load * span **2/8 */
function calculateMoment() {
    load = document.getElementById("load").value;
  
    span = document.getElementById("span").value;
  
  
    maxMoment = (load * span ** 2/ 8).toFixed(2);
  
    document.getElementById("maxMoment").innerHTML = `Maximum Bending Moment kip-ft/ft: ${maxMoment}`;
  }