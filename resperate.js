document.getElementById("respiratoryRateForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var breaths = parseInt(document.getElementById("breaths").value);
    var time = parseInt(document.getElementById("time").value);
    
    // Calculate respiratory rate
    var respiratoryRate = (breaths / time) * 60;
    
    // Display result
    document.getElementById("result").innerText = "Respiratory Rate: " + respiratoryRate.toFixed(2) + " breaths per minute";
  });