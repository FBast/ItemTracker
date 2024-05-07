import React from 'react';

function CategorySelector({ category, setCategory }) {
    return (
        <div className="category-selector">
            <button onClick={() => setCategory('Item')} className={category === 'Item' ? 'active' : ''}>Item</button>
            <button onClick={() => setCategory('Emprunt')} className={category === 'Emprunt' ? 'active' : ''}>Emprunt</button>
        </div>
    );
}

export default CategorySelector;