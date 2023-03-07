
import { Container } from "./styles"

interface EnvironmentsProps {
  environments: any[]
}
export function Environments({ environments }: EnvironmentsProps) {
  return (
    <Container>
      {environments.map((environment) => (
        <div key={environment.id} className="environment">
          <h2>{environment.name}</h2>
          <img src={environment.image} alt={environment.name} />
          <p>{environment.description}</p>
        </div>
      ))}
    </Container>
  )
}
