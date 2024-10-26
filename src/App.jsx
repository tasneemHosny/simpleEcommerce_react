import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products/products'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const [count, setCount] = useState(0)
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Products></Products>
    </QueryClientProvider>
  )
}

export default App
