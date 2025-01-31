import { useEffect } from 'react';
import { useJournalStore } from '../store';

export const useFetch = (action, dependencies = []) => {
    const { fetchJournalEntries, entries, loading, error } = useJournalStore((state) => ({
        fetchJournalEntries: state.fetchJournalEntries,
        entries: state.entries,
        loading: state.loading,
        error: state.error,
    }));

    useEffect(() => {
        fetchJournalEntries();
    }, [fetchJournalEntries, ...dependencies]);

    return { data: entries, loading, error };
};