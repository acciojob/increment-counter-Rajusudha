//your JS code here. If required.
  document.addEventListener('DOMContentLoaded', function () {
      // Get the counter and button elements
      var counterElement = document.getElementById('counter');
      var incrementButton = document.getElementById('incrementBtn');

      // Initialize counter and click count
      var counterValue = 0;
      var clickCount = 0;
      counterElement.textContent = counterValue;

      // Function to increment the counter, show an alert, and limit to three clicks
      function incrementCounter() {
        if (clickCount < 3) {
          counterValue++;
          counterElement.textContent = counterValue;
          clickCount++;
          alert('Counter Value: ' + counterValue);
        } else {
          alert('Maximum clicks reached!');
        }
      }

      // Attach the incrementCounter function to the button click event
      incrementButton.addEventListener('click', incrementCounter);
    });