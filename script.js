document.getElementById('ticketForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('ticketTitle').value;
    const description = document.getElementById('ticketDescription').value;
    const priority = document.getElementById('ticketPriority').value;

    // Validate the fields
    if (!title || !description || !priority) {
        showMessage('Please fill all the fields', 'error');
        return;
    }

    // LocalStorage me save (Static GitHub Pages me DB nahi hota)
    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push({ title, description, priority, status: 'Open' });
    localStorage.setItem('tickets', JSON.stringify(tickets));

    // Show success message
    showMessage('Ticket created successfully!', 'success');

    // Reset the form
    this.reset();
});

// Show success/error messages
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';
    messageDiv.textContent = message;
    messageDiv.className = type; // 'success' or 'error'

    // Auto-hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}
