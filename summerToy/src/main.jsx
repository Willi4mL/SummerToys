import React from 'react'
import ReactDOM from 'react-dom/client'
import './styling/index.css'
import './styling/header.css'
import './styling/login.css'
import './styling/searchNavbar.css'
import './styling/addProduct.css'
import './styling/card.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Config.jsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
