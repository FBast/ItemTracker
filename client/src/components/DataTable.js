import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataTable({ category }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/items`);
                setItems(response.data);
            } catch (error) {
                setError('Failed to fetch data');
                console.error('There was an error fetching the data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category]);  // Ce hook se déclenchera à nouveau lorsque `category` change

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="data-table">
            <table>
                <thead>
                <tr>
                    <th>Nom</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
