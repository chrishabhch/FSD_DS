import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Marks from './Marks.jsx'
import Displaymarks from './Displaymarks.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Marks m1={78} m2={88} m3={89} m4={89} m5={67} m6={78}/> */}
    <Displaymarks />
  </StrictMode>,
)
