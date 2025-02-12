import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: `HealthSync <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        });
        return true;
    } catch (error) {
        throw new Error('Email sending failed: ' + error.message);
    }
};

export default { sendEmail };
