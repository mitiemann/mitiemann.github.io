@def title = "Birthday Party Registration"

<!-- -----------------
      BIRTHDAY REGISTRATION SECTION
      ----------------- -->

\begin{section}{name="birthday"}

\sectionheading{"Birthday Party Registration", class="col-12 col-lg-4"}

@@col-12,col-lg-8

\begin{birthday-form}
  Join us for a fantastic birthday celebration! Please register below to let us know you're coming.
\end{birthday-form}

<!-- Registration Form -->
<form action="https://api.staticforms.dev/submit" method="POST" id="birthday-registration">
  <input type="hidden" name="apiKey" value="sf_abc123def456">
  <input type="hidden" name="subject" value="Birthday Party Registration">
  <input type="hidden" name="redirectTo" value="/birthday-thanks">

  <!-- Honeypot field for spam protection -->
  <div style="display:none;">
    <label for="honeypot">Leave this field blank</label>
    <input type="text" name="honeypot" id="honeypot">
  </div>

  <!-- Visitor Information -->
  <div class="form-group">
    <label for="name">Your Name *</label>
    <input type="text" name="name" id="name" class="form-control" required>
  </div>

  <div class="form-group">
    <label for="email">Your Email *</label>
    <input type="email" name="email" id="email" class="form-control" required>
  </div>

  <!-- Guest Count -->
  <div class="form-group">
    <label for="guest-count">Number of Guests (including yourself) *</label>
    <select name="guest-count" id="guest-count" class="form-control" required>
      <option value="">Select number of guests</option>
      <option value="1">1 (just me)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6+">6 or more</option>
    </select>
  </div>

  <!-- Time Availability -->
  <div class="form-group">
    <label>Available Time Slots (select all that work for you) *</label>
    <div class="time-slots">
      <div class="form-check">
        <input type="checkbox" name="time-slots" value="4pm-6pm" id="time-4-6" class="form-check-input">
        <label for="time-4-6" class="form-check-label">4:00 PM - 6:00 PM</label>
      </div>
      <div class="form-check">
        <input type="checkbox" name="time-slots" value="6pm-8pm" id="time-6-8" class="form-check-input">
        <label for="time-6-8" class="form-check-label">6:00 PM - 8:00 PM</label>
      </div>
      <div class="form-check">
        <input type="checkbox" name="time-slots" value="8pm-10pm" id="time-8-10" class="form-check-input">
        <label for="time-8-10" class="form-check-label">8:00 PM - 10:00 PM</label>
      </div>
      <div class="form-check">
        <input type="checkbox" name="time-slots" value="10pm-12am" id="time-10-12" class="form-check-input">
        <label for="time-10-12" class="form-check-label">10:00 PM - 12:00 AM</label>
      </div>
      <div class="form-check">
        <input type="checkbox" name="time-slots" value="12am-2am" id="time-12-2" class="form-check-input">
        <label for="time-12-2" class="form-check-label">12:00 AM - 2:00 AM</label>
      </div>
    </div>
  </div>

  <!-- Cake Option -->
  <div class="form-group">
    <div class="form-check">
      <input type="checkbox" name="bringing-cake" value="yes" id="bringing-cake" class="form-check-input">
      <label for="bringing-cake" class="form-check-label">I will bring a cake!</label>
    </div>
  </div>

  <!-- Special Requests -->
  <div class="form-group">
    <label for="special-requests">Special Requests or Dietary Restrictions</label>
    <textarea name="special-requests" id="special-requests" class="form-control" rows="3"></textarea>
  </div>

  <!-- Submit Button -->
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Register for Party</button>
  </div>
</form>

@@ <!-- end of column -->
\end{section}