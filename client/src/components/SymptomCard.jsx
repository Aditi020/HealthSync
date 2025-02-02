const SymptomCard = ({ result }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-2">
            <h3 className="font-bold">{result.condition}</h3>
            <p>{result.description}</p>
            <span className="text-sm text-gray-500">{result.urgency}</span>
        </div>
    );
};

export default SymptomCard;