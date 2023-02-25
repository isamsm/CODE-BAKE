import './styles/About.css'

import { AiFillGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';

import Header from "./components/Header";
import NavBar from "./components/NavBar";

const About = () => {
    return (
        <>
            <Header />
            <NavBar />

            <section className='container-about container-fluid'>
                <div className='main-about'>
                    <p className='about-text'> Este é um projeto feito em react de uma boleria fake, no qual você pode visualizar a vitrine, a tabela de preços e adicionar ou remover uma encomenda do carrinho. </p>
                    <div className='info'>
                        <p> <a href='https://github.com/isamsm' rel='noreferrer' target='_blank'> <AiFillGithub /> </a> @isamsm </p>
                        <p> <a href='https://www.linkedin.com/in/isamsm/' rel='noreferrer' target='_blank'> <ImLinkedin2 /> </a> @isamsm </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;