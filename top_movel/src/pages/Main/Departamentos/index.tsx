import { Head } from '../../../components/Head'
import { EnvironmentsTitle } from '../../../components/PicturesTitle'
import { Environments } from '../../../components/Pictures'


export default function Cozinhas() {
  const data = [
    {
      id: 1,
      environment: 'em alta',
      name: 'Salas de Tv',
      description: 'Paineis ripados para dar um descaque incomparavel a sua sala de Tv.',
      price: 10,
      image: 'https://i.pinimg.com/236x/0e/ee/52/0eee52ba2cb2552b6230b5b4909c30a2.jpg'
    },
    {
      id: 2,
      environment: 'em alta',
      name: 'Dormitórios',
      description: 'Roupeiros, closet´s, cabeceiras, tudo 100% MDF com as mais variadas cores das melhores marcas do mercado.',
      price: 10,
      image: 'https://i.pinimg.com/236x/22/6d/63/226d639cc7a2637eb60b25edff067a71.jpg'
    },
    {
      id: 3,
      environment: 'em alta',
      name: 'Cozinhas',
      description: 'Cozinhas 100% MDF com o que tem de melhor em material no mercado,  design inigualável e uma qualidade no acabamento que você vai se surpreender.',
      price: 10,
      image: 'https://i.pinimg.com/236x/eb/a9/dc/eba9dc72b87ee4da039b6d91ff8ece13.jpg'
    },
  ]

  return (
    <>
      <Head title='Departamentos' />
      <EnvironmentsTitle>Cozinhas</EnvironmentsTitle>
      <Environments environments={data}></Environments>
    </>
  )
}
