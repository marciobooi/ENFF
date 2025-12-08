import { useEffect, useState } from 'react';
import axios from 'axios';

const defaultUrl = import.meta.env.VITE_EUROSTAT_URL;

const buildErrorMessage = (err) => {
    const status = err?.response?.status;
    const statusText = err?.response?.statusText;
    if (!status) return 'Eurostat request failed';
    return statusText ? `Eurostat request failed (${status} ${statusText})` : `Eurostat request failed (${status})`;
};

const useEurostatData = (url = defaultUrl) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;

        if (!url) {
            setError('VITE_EUROSTAT_URL is not set; skipping fetch');
            return () => {
                isMounted = false;
            };
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                if (!isMounted) return;
                setData(response.data);
                setError(null);
            } catch (err) {
                if (!isMounted) return;
                setError(buildErrorMessage(err));
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, error, loading };
};

export default useEurostatData;
