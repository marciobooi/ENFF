import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import ECL EU styles from npm package
import '@ecl/preset-eu/dist/styles/optional/ecl-eu-default.css'
import '@ecl/preset-eu/dist/styles/optional/ecl-reset.css'
import '@ecl/preset-eu/dist/styles/ecl-eu.css'

// Import ECL JS from npm package (named export)
import { ECL } from '@ecl/preset-eu/dist/scripts/ecl-esm-eu.js'

// Make ECL available globally
window.ECL = ECL

createRoot(document.getElementById('root')).render(
    <App />
)
