import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CustomerList from './components/CustomersList.jsx'
import TrainingList from './components/TrainingsList.jsx'
import ScheduleCalendar from './components/ScheduleCalendar.jsx'
import Error from './components/Error404.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/ReactPersonalTrainingApp/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <CustomerList />,
        index: true
      },
      {
        path: "trainings",
        element: <TrainingList />
      },
      {
        path: "calendar",
        element: <ScheduleCalendar />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
