import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface HealthMetric {
  date: string;
  temperature: string;
  heartRate: string;
  sleep: string;
  weight: string;
  water: number;
  mood: 'good' | 'okay' | 'bad';
}

interface HealthMetricsState {
  metrics: HealthMetric[];
  addMetric: (metric: HealthMetric) => void;
  updateMetric: (date: string, updates: Partial<HealthMetric>) => void;
  getMetricsByDateRange: (startDate: string, endDate: string) => HealthMetric[];
}

export const useHealthMetricsStore = create<HealthMetricsState>()(
  persist(
    (set, get) => ({
      metrics: [],
      
      addMetric: (metric) => {
        set((state) => ({
          metrics: [
            ...state.metrics.filter((m) => m.date !== metric.date),
            metric,
          ],
        }));
      },

      updateMetric: (date, updates) => {
        set((state) => ({
          metrics: state.metrics.map((metric) =>
            metric.date === date ? { ...metric, ...updates } : metric
          ),
        }));
      },

      getMetricsByDateRange: (startDate, endDate) => {
        return get().metrics.filter(
          (metric) => metric.date >= startDate && metric.date <= endDate
        );
      },
    }),
    {
      name: 'health-metrics-storage',
    }
  )
);