const HealthLogCard = ({ log }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-bold">{log.date}</h3>
            <p>{log.symptoms.join(", ")}</p>
            <p>{log.notes}</p>
        </div>
    );
};

export default HealthLogCard;