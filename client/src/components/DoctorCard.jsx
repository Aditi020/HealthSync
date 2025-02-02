const DoctorCard = ({ doctor }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-bold">{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <p>{doctor.distance} miles away</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
                Book Appointment
            </button>
        </div>
    );
};

export default DoctorCard;