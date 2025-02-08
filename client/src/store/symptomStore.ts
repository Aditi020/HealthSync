import { create } from 'zustand';

interface Symptom {
  id: string;
  name: string;
}

interface Condition {
  id: string;
  name: string;
  description: string;
  urgency: 'mild' | 'moderate' | 'severe';
  suggestedAction: string;
}

interface SymptomState {
  symptoms: Symptom[];
  conditions: Condition[];
  isLoading: boolean;
  error: string | null;
  addSymptom: (symptom: string) => void;
  removeSymptom: (id: string) => void;
  checkSymptoms: () => Promise<void>;
  clearSymptoms: () => void;
}

// Mock API response for demo purposes
const mockCheckSymptoms = async (symptoms: Symptom[]): Promise<Condition[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock conditions based on symptoms
  return symptoms.map(symptom => ({
    id: `condition-${Math.random()}`,
    name: `${symptom.name.charAt(0).toUpperCase() + symptom.name.slice(1)} Related Condition`,
    description: `A condition commonly associated with ${symptom.name.toLowerCase()}.`,
    urgency: ['mild', 'moderate', 'severe'][Math.floor(Math.random() * 3)] as 'mild' | 'moderate' | 'severe',
    suggestedAction: Math.random() > 0.5 
      ? 'Consult a doctor within 24 hours' 
      : 'Rest and monitor symptoms',
  }));
};

export const useSymptomStore = create<SymptomState>((set, get) => ({
  symptoms: [],
  conditions: [],
  isLoading: false,
  error: null,
  
  addSymptom: (symptomName) => {
    const symptoms = get().symptoms;
    if (symptoms.some(s => s.name.toLowerCase() === symptomName.toLowerCase())) {
      return; // Avoid duplicates
    }
    set(state => ({
      symptoms: [...state.symptoms, {
        id: `symptom-${Math.random()}`,
        name: symptomName.trim()
      }]
    }));
  },
  
  removeSymptom: (id) => {
    set(state => ({
      symptoms: state.symptoms.filter(s => s.id !== id)
    }));
  },
  
  checkSymptoms: async () => {
    const symptoms = get().symptoms;
    if (symptoms.length === 0) {
      set({ error: 'Please enter at least one symptom' });
      return;
    }
    
    set({ isLoading: true, error: null });
    try {
      const conditions = await mockCheckSymptoms(symptoms);
      set({ conditions, isLoading: false });
    } catch (error) {
      set({ 
        error: 'Failed to analyze symptoms. Please try again.',
        isLoading: false 
      });
    }
  },
  
  clearSymptoms: () => {
    set({ symptoms: [], conditions: [], error: null });
  },
}));