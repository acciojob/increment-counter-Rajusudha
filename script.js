//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
      // Get the counter and button elements
      var counterElement = document.getElementById('counter');
      var incrementButton = document.getElementById('incrementBtn');

      // Initialize counter
      var counterValue = 0;
      counterElement.textContent = counterValue;

      // Function to increment the counter and show an alert
      function incrementCounter() {
        counterValue++;
        counterElement.textContent = counterValue;
        alert('Counter Value: ' + counterValue);
      }

      // Attach the incrementCounter function to the button click event
      incrementButton.addEventListener('click', incrementCounter);
    });