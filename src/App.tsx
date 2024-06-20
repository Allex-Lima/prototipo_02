import './App.css'
import PageGraphic from './pages/PageGraphic'
import PageLogin from './pages/PageLogin'
import PageTable from './pages/PageTable'
import PageReport from './pages/PageReport'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLogin />}/>
        <Route path='/produtos' element={ <PageTable />}/>
        <Route path='/grafico' element={ <PageGraphic />}/>
        <Route path='/report' element={ <PageReport />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
