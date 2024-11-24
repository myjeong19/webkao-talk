import './App.css'

import { Suspense } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { queryClient } from './tanstack'

function App() {

  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
