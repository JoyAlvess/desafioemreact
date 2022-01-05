import Image from 'next/image';
import photo from '../public/img/cardimg.jpg'

import Layout from '../components/layout';
import Card from '../components/card';
export default function Home() {
  return (
    <>
      <Layout>
        <>
          {/* <h1>Desafios Resolvidos</h1> */}
          <Card
            img={photo}
            alt={'Glossário'}
            title={'Glossário'}
            description={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
          />

          <Card
            img={photo}
            alt={'Formulário de Compras'}
            title={'Formulário de Compras'}
            description={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
          />

          <Card
            img={photo}
            alt={'desafio'}
            title={'Lista de Compras'}
            description={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
          />

          <Card
            img={photo}
            alt={'Quiz'}
            title={'Quiz'}
            description={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
          />
           <Card
            img={photo}
            alt={'Quiz'}
            title={'Quiz'}
            description={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
          />
        </>
      </Layout>
    </>
  );
}