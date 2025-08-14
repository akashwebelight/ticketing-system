const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zencyinfo@gmail.com',
        pass: 'your-app-password'
    }
});

const sendTicketReport = (ticketDetails) => {
    const mailOptions = {
        from: 'zencyinfo@gmail.com',
        to: 'adminemail@example.com',
        subject: 'New Ticket Created',
        text: `New Ticket:
                Title: ${ticketDetails.title}
                Description: ${ticketDetails.description}
                Priority: ${ticketDetails.priority}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
