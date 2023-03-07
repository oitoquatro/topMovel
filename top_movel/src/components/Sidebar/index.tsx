import { Container } from './styles'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <span>Departamentos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='qualidade'>
              <span>Qualidade</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='sobrenos'>
              <span>Sobre nós</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='atendimento'>
              <span>Atendimento</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
