import Rander from './Components/Rander';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerLicense } from '@syncfusion/ej2-base'
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cW2hIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEBjW35XcHRUQ2RaWE1+Wg==');  // Replace with your actual key
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rander />
  </StrictMode>,
)
