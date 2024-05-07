import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategorySelector from './components/CategorySelector';
import ItemActions from './components/ItemActions';
import DataTable from './components/DataTable';

function App() {
    const [category, setCategory] = useState('Item');

    return (
        <div className="app">
            <Navbar title="Item Tracker" />
            <CategorySelector category={category} setCategory={setCategory} />
            <ItemActions category={category} />
            <DataTable category={category} />
        </div>
    );
}

export default App;
