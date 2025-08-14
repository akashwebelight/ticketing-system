const generateReport = () => {
    // Fetch all tickets from Firebase and generate a report
    const tickets = []; // Replace with Firebase ticket data
    let report = 'Ticket Report:\n';

    tickets.forEach(ticket => {
        report += `Title: ${ticket.title}, Status: ${ticket.status}, Priority: ${ticket.priority}\n`;
    });

    sendTicketReport(report);
};

document.getElementById('generateReportBtn').addEventListener('click', generateReport);
