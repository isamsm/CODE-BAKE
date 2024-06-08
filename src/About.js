import './styles/About.css'

import { AiFillGithub } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'

import Header from './components/Header'

const About = () => {
  return (
    <>
      <Header />

      <section className="container-about container-fluid">
        <div className="main-about">
          <p className="about-text">
            {' '}
            Bem-vindo ao Code&Bake, sua confeitaria virtual especializada em
            bolos deliciosamente irresistíveis! Nosso projeto, criado com React
            e Bootstrap, une a paixão pela confeitaria com a inovação digital.
            <br/> <br/>
            Em nosso site, você encontrará uma vitrine cativante, onde cada bolo
            é cuidadosamente exibido em um carousel dinâmico. Explore nossa
            seleção de bolos, todos feitos com ingredientes de alta qualidade e
            amor. 
            <br/> <br/>
            Para encomendar, oferecemos um formulário simples e intuitivo,
            permitindo que você personalize seu bolo de acordo com seus desejos.
            E com nosso carrinho interativo, você pode revisar seu pedido e
            fazer ajustes antes de finalizar a compra, garantindo uma
            experiência de compra sem complicações. 
            <br/> <br/>
            No Code&Bake, acreditamos
            que cada momento merece um toque doce. Então, deixe-nos adoçar seu
            dia com nossos bolos feitos com carinho e expertise. Venha explorar
            nossas delícias e descubra o verdadeiro prazer de saborear um bolo
            do Code&Bake!{' '}
          </p>
          <div className="info">
            <p>
              {' '}
              <a
                href="https://github.com/isamsm"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                <AiFillGithub />{' '}
              </a>{' '}
              @isamsm{' '}
            </p>
            <p>
              {' '}
              <a
                href="https://www.linkedin.com/in/isamsm/"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                <ImLinkedin2 />{' '}
              </a>{' '}
              @isamsm{' '}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
