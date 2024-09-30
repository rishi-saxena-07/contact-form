function selectButton(selectedId) {
    // Get all buttons
    const buttons = document.querySelectorAll('.query-button');
  
    // Remove 'selected' class from all buttons
    buttons.forEach(button => {
      button.classList.remove('selected');
    });
  
    // Add 'selected' class to the clicked button
    const selectedButton = document.getElementById(selectedId);
    selectedButton.classList.add('selected');
  }
  