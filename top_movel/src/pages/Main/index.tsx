import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import logoImg from '../../Assets/Top M_vel_free-file.png'
import { Outlet } from 'react-router-dom'


export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>

    </Container>
  )
}
