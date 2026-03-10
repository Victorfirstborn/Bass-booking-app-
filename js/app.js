// Select the form
const bookingForm = document.getElementById('bookingForm');

// Load previous bookings from localStorage
const previousBookings = JSON.parse(localStorage.getItem('bookings')) || [];

// Function to save booking
function saveBooking(booking) {
    previousBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(previousBookings));
}

// Handle form submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const eventType = document.getElementById('eventType').value;

    // Create booking object
    const booking = { name, email, date, eventType };

    // Save booking
    saveBooking(booking);

    // Show confirmation
    alert(`🎸 Booking Confirmed!\nThank you, ${name}.`);

    // Reset form
    bookingForm.reset();
});const bookingList = document.getElementById('bookingList');

// Function to display all bookings
function displayBookings() {
    bookingList.innerHTML = '';
    previousBookings.forEach(b => {
        const li = document.createElement('li');
        li.textContent = `${b.name} | ${b.email} | ${b.eventType} | ${b.date}`;
        bookingList.appendChild(li);
    });
}

// Display bookings on page load
displayBookings();

// Update display after a new booking
bookingForm.addEventListener('submit', function() {
    displayBookings();
});