
import { RouterProvider } from 'react-router-dom'
import './App.css'
import appRoute from './Route/AppRoute'

function App() {
  return (
    <>
        <div className="container-fluid position-relative">
            <RouterProvider router={appRoute}/>
        </div>

    </>
  )
}

export default App
