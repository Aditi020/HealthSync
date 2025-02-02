import { create } from "zustand";

const useMedicationStore = create((set) => ({
    medications: [],
    addMedication: (medication) =>
        set((state) => ({ medications: [...state.medications, medication] })),
    deleteMedication: (id) =>
        set((state) => ({
            medications: state.medications.filter((med) => med.id !== id),
        })),
}));

export default useMedicationStore;