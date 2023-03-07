import { Head } from '../../../components/Head'
import { EnvironmentsTitle } from '../../../components/PicturesTitle'
import { Environments } from '../../../components/Pictures'


export default function Salas() {
  const data = [
    {
      id: 1,
      environment: 'qualidade',
      name: 'Corrediças',
      description: 'As melhores e mais resistentes corrediças telescópcas, ocultas ou abertura por toque. ',
      price: 10,
      image: 'https://cdn.leroymerlin.com.br/products/corredica_telescopica_aco_zincado_25cm_ate_25kg_1_par_89083015_0001_300x300.jpg'
    },
    {
      id: 2,
      environment: 'qualidade',
      name: 'Dobradiças',
      description: 'Dobradiças inoxidaveis e com sistema de amortecimento',
      price: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jSvhigLmvM_XEVQeZbMHCGiLrYUbRksikg&usqp=CAU'
    },
    {
      id: 3,
      environment: 'qualidade',
      name: 'MDF',
      description: 'MDF das mais variadas cores, das melhores marcas, resitentes a fogo e resistentes a água.',
      price: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZOpJBT1mXF11_ypx90L_rS-1Z-hOfUuETA&usqp=CAU'
    },
  ]

  return (
    <>
      <Head title='Qualidade' />
      <EnvironmentsTitle>Salas</EnvironmentsTitle>
      <Environments environments={data}></Environments>
    </>
  )
}
