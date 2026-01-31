// Birthday Party Registration Form Enhancements

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('birthday-registration');
  
  if (form) {
    // Form validation
    form.addEventListener('submit', function(e) {
      const timeSlots = document.querySelectorAll('input[name="time-slots"]:checked');
      
      if (timeSlots.length === 0) {
        e.preventDefault();
        alert('Please select at least one available time slot.');
        return false;
      }
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    });
    
    // Select all time slots functionality
    const selectAllBtn = document.createElement('button');
    selectAllBtn.type = 'button';
    selectAllBtn.className = 'btn btn-secondary btn-sm';
    selectAllBtn.textContent = 'Select All Time Slots';
    selectAllBtn.style.marginBottom = '10px';
    
    selectAllBtn.addEventListener('click', function() {
      const checkboxes = document.querySelectorAll('input[name="time-slots"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = true;
      });
    });
    
    const timeSlotsContainer = form.querySelector('.time-slots');
    if (timeSlotsContainer) {
      timeSlotsContainer.parentNode.insertBefore(selectAllBtn, timeSlotsContainer);
    }
  }
});