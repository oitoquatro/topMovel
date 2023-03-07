import { Routes, Route } from 'react-router-dom'

import CozinhasPage from './pages/Main/Departamentos'
import SalasPage from './pages/Main/Qualidade'
import DormitoriosPage from './pages/Main/SobreNos'
import AtendimentoPage from './pages/Main/Atendimento'


import MainPage from './pages/Main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<CozinhasPage />} />
        <Route path='qualidade' element={<SalasPage />} />
        <Route path='sobrenos' element={<DormitoriosPage />} />
        <Route path='atendimento' element={<AtendimentoPage />} />
      </Route>
    </Routes >
  )
}
