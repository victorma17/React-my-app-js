import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './componentes/Home'
import { Lista } from './componentes/lista.jsx'
// import { Producto } from './Producto'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>

          <Route index element={<p>inicio </p>}></Route>
          <Route path="home" element={<p>Home principal </p>}></Route>
          <Route path="/hey" element={<Home></Home>}></Route>
          <Route path="lista" element={<p><Lista></Lista> </p>}></Route>
          <Route path="*" element={<p>No válida </p>}></Route>

          {/*   Comment Section 
        <Route path="/" element={<Home></Home>}>
        </Route>
        */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
