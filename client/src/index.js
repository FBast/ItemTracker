import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import du composant App
import './index.css'; // Import des styles globaux

// Importation optionnelle de bibliothèques ou de configurations supplémentaires
// Par exemple, pour Redux ou React Router, mais non inclus ici pour la simplicité

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Cible l'élément DOM avec l'ID 'root' pour le rendu de l'application
);