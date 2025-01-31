import React, { useEffect } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import Button from '../components/Button';
import { useJournalStore } from '../store';

const HealthJournal = () => {
    const { entries, loading, error, fetchJournalEntries, addJournalEntry } = useJournalStore((state) => ({
        entries: state.entries,
        loading: state.loading,
        error: state.error,
        fetchJournalEntries: state.fetchJournalEntries,
        addJournalEntry: state.addJournalEntry,
    }));

    useEffect(() => {
        fetchJournalEntries();
    }, [fetchJournalEntries]);

    const handleAddEntry = async () => {
        const newEntry = { date: new Date().toISOString(), notes: 'New entry' };
        await addJournalEntry(newEntry);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-8">Health Journal</h1>

            {/* Add New Entry Button */}
            <Button className="mb-6" onClick={handleAddEntry} disabled={loading}>
                <Plus className="mr-2 h-4 w-4" />
                Add New Entry
            </Button>

            {/* Journal Entries List */}
            {loading ? (
                <p className="text-gray-600">Loading journal entries...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="space-y-4">
                    {entries.map((entry) => (
                        <div key={entry.id} className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">{entry.date}</p>
                                    <p className="text-lg">{entry.notes}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <Button variant="ghost">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost">
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HealthJournal;