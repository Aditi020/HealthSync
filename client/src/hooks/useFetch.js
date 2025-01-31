import { useEffect } from 'react';
import { useJournalStore } from '../store';
import { handleApiError } from '../utils/helpers';

export const useFetch = (action, dependencies = []) => {
    const { fetchJournalEntries, entries, loading, error } = useJournalStore((state) => ({
        fetchJournalEntries: state.fetchJournalEntries,
        entries: state.entries,
        loading: state.loading,
        error: state.error,
    }));

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchJournalEntries();
            } catch (error) {
                handleApiError(error); // Use helper function for error handling
            }
        };

        fetchData();
    }, [fetchJournalEntries, ...dependencies]);

    return { data: entries, loading, error };
};