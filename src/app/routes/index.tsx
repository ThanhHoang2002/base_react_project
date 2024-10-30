/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainErrorFallback } from '../../components/error/app-error'
const Hello = React.lazy(() => import('./app/hello'))
export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Hello />,
      errorElement: <MainErrorFallback />
    }
  ])
