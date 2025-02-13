import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMedicationStore = create(
  persist(
    (set, get) => ({
      medications: [],
      isLoading: false,
      error: null,

      addMedication: (medication) => {
        const newMedication = {
          ...medication,
          id: `med-${Date.now()}-${Math.random()}`,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          medications: [...state.medications, newMedication],
        }));
      },

      updateMedication: (id, updatedMedication) => {
        set((state) => ({
          medications: state.medications.map((med) =>
            med.id === id ? { ...med, ...updatedMedication } : med
          ),
        }));
      },

      deleteMedication: (id) => {
        set((state) => ({
          medications: state.medications.filter((med) => med.id !== id),
        }));
      },

      markAsTaken: (id) => {
        const now = new Date().toISOString();
        set((state) => ({
          medications: state.medications.map((med) =>
            med.id === id
              ? {
                ...med,
                lastTaken: now,
                nextDose: (() => {
                  const date = new Date();
                  switch (med.frequency) {
                    case 'daily':
                      date.setDate(date.getDate() + 1);
                      break;
                    case 'weekly':
                      date.setDate(date.getDate() + 7);
                      break;
                    case 'monthly':
                      date.setMonth(date.getMonth() + 1);
                      break;
                  }
                  return date.toISOString();
                })(),
              }
              : med
          ),
        }));
      },

      getUpcomingMedications: () => {
        const { medications } = get();
        const now = new Date();
        return medications
          .filter((med) => {
            const nextDose = new Date(med.nextDose);
            return nextDose > now && nextDose.getDate() === now.getDate();
          })
          .sort((a, b) => new Date(a.nextDose).getTime() - new Date(b.nextDose).getTime());
      },
    }),
    {
      name: 'medication-storage',
    }
  )
);