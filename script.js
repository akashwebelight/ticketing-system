document.getElementById('ticketForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('ticketTitle').value;
    const description = document.getElementById('ticketDescription').value;
    const priority = document.getElementById('ticketPriority').value;

    // LocalStorage me save (Static GitHub Pages me DB nahi hota)
    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push({ title, description, priority, status: 'Open' });
    localStorage.setItem('tickets', JSON.stringify(tickets));

    alert("Ticket created successfully!");
    this.reset();
});
