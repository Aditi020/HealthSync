import Agenda from 'agenda';

const agenda = new Agenda({
    db: { address: process.env.MONGO_URI, collection: 'jobs' }
});

// Schedule medication reminders
export const scheduleReminder = async (userId, medicationId, time) => {
    agenda.define(`reminder-${medicationId}`, async (job) => {
        // Implement notification logic here
    });

    await agenda.schedule(time, `reminder-${medicationId}`, { userId });
    console.log(`Reminder scheduled for ${time}`);
};

export default { scheduleReminder };