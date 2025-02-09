import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { useHealthMetricsStore } from '../store/healthMetricsStore';

const HealthMetricsExport = () => {
  const [isExporting, setIsExporting] = useState(false);
  const { exportMetrics } = useHealthMetricsStore();

  const handleExport = async (format: 'csv' | 'pdf') => {
    setIsExporting(true);
    try {
      const data = exportMetrics(format);
      const blob = new Blob([data], { type: format === 'csv' ? 'text/csv' : 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `health-metrics.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleExport('csv')}
        disabled={isExporting}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isExporting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        <span>Export CSV</span>
      </button>
      <button
        onClick={() => handleExport('pdf')}
        disabled={isExporting}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isExporting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        <span>Export PDF</span>
      </button>
    </div>
  );
};

export default HealthMetricsExport;