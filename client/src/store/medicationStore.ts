import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  nextDose: string;
  createdAt: string;
  lastTaken?: string;
}

interface MedicationState {
  medications: Medication[];
  isLoading: boolean;
  error: string | null;
  addMedication: (medication: Omit<Medication, 'id' | 'createdAt'>) => void;
  updateMedication: (id: string, medication: Partial<Medication>) => void;
  deleteMedication: (id: string) => void;
  markAsTaken: (id: string) => void;
  getUpcomingMedications: () => Medication[];
}

export const useMedicationStore = create<MedicationState>()(
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