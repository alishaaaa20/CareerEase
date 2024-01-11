import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error when making a new request.

            try {

                const headers = {
                    'Content-Type': 'application/json',
                };
                const token = localStorage.getItem("token") || null;

                // If a token is provided, include it in the request headers
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }

                const res = await fetch(url, {
                    method: 'GET',
                    headers,
                });


                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }

                const result = await res.json();
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;
