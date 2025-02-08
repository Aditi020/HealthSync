import React, { useState } from 'react';
import {
  BarChart2,
  Calendar,
  Filter,
  TrendingUp,
  Activity,
  Heart,
  Brain,
  Pill,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useJournalStore } from '../store/journalStore';
import { useMedicationStore } from '../store/medicationStore';

const Insights = () => {
  const [dateRange, setDateRange] = useState('week');
  const { logs } = useJournalStore();
  const { medications } = useMedicationStore();

  // Calculate date range
  const getDateRange = () => {
    const end = new Date();
    const start = new Date();
    switch (dateRange) {
      case 'week':
        start.setDate(end.getDate() - 7);
        break;
      case 'month':
        start.setMonth(end.getMonth() - 1);
        break;
      case 'year':
        start.setFullYear(end.getFullYear() - 1);
        break;
      default:
        start.setDate(end.getDate() - 7);
    }
    return { start, end };
  };

  // Process symptom data for charts
  const getSymptomData = () => {
    const { start, end } = getDateRange();
    const filteredLogs = logs.filter(
      (log) => new Date(log.date) >= start && new Date(log.date) <= end
    );

    const symptomCounts: Record<string, number> = {};
    filteredLogs.forEach((log) => {
      log.symptoms.forEach((symptom) => {
        symptomCounts[symptom] = (symptomCounts[symptom] || 0) + 1;
      });
    });

    return Object.entries(symptomCounts).map(([name, count]) => ({
      name,
      count,
    }));
  };

  // Process medication adherence data
  const getMedicationAdherence = () => {
    const { start, end } = getDateRange();
    const adherenceData = medications.map((med) => {
      const totalDoses = Math.floor(
        (end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
      );
      const takenDoses = logs.filter(
        (log) =>
          new Date(log.date) >= start &&
          new Date(log.date) <= end &&
          log.medications.includes(med.name)
      ).length;

      return {
        name: med.name,
        adherence: (takenDoses / totalDoses) * 100,
      };
    });

    return adherenceData;
  };

  // Generate mock health metrics data
  const getHealthMetricsData = () => {
    const { start, end } = getDateRange();
    const days = Math.floor(
      (end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
    );
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return {
        date: date.toLocaleDateString(),
        heartRate: Math.floor(Math.random() * (85 - 65) + 65),
        sleep: Math.floor(Math.random() * (9 - 5) + 5),
      };
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BarChart2 className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Health Insights
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Symptom Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Symptom Trends
            </h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getSymptomData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Medication Adherence */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Pill className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Medication Adherence
            </h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getMedicationAdherence()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip />
                <Bar dataKey="adherence" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heart Rate Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Heart Rate Trends
            </h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getHealthMetricsData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis unit=" bpm" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="heartRate"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sleep Duration */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Sleep Duration
            </h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getHealthMetricsData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis unit="h" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sleep"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;