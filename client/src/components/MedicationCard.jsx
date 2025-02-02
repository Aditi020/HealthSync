const MedicationCard = ({ medication }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-bold">{medication.name}</h3>
            <p>{medication.dosage}</p>
            <p>{medication.time}</p>
        </div>
    );
};

export default MedicationCard;