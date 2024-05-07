import React from 'react';

function ItemActions({ category }) {
    return (
        <div className="item-actions">
            {category === 'Item' && <button>Ajouter Item</button>}
            {category === 'Emprunt' && <button>Ajouter Emprunt</button>}
        </div>
    );
}

export default ItemActions;
