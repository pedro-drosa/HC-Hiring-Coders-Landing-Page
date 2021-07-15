import {FormEvent, useState} from 'react';
import { FiGithub, FiLinkedin, FiSlack } from 'react-icons/fi';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

import backgroundImg from '../../assets/images/background.jpg'; 
import controllImg from '../../assets/images/controll.jpg'; 

import './style.scss';

export function Home() {
  const [newEmail, setNewEmail] = useState<string>('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    localStorage.setItem('[HC]landingpage', newEmail);
    setNewEmail('');
  }
  
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }

  return(
  <>
    <main style={backgroundStyle}>
      <div className='container'>
        <header>
          <span>The All new 518/588 DPI.</span>
          <h1>Remarkable Performance</h1>
          <p>Cadastre seu email para receber as ofertas de pré venda, e economize até 50 a 75% na Loja Xbox com descontos exclusivos.</p>
          <form onSubmit={handleSubmit}>
            <Input
              type="email" 
              placeholder="Enter your best email"
              onChange= { e => setNewEmail(e.target.value)}
              value={newEmail} 
            />
            <Button type='submit'>REGISTER</Button>
          </form>
        </header>
      </div>
    </main>
    <aside>
      <section>
        <div className="photo">
          <img src={controllImg} alt="user" />
        </div>
        <div className="photo-content">
          <h1>GET AN AMAZING RESULT</h1>
          <p>Xbox One Elite is the new Xbox One controller that features key customization. The joystick is visually the same as the traditional model, but it is heavier and more sensitive to the touch. </p>
          <p>The ability to switch between analogs is one of the highlights of the accelerator, allowing the player to choose which style is best for him.</p>
          <Button type='button'>Sign Up</Button>
        </div>
      </section>
    </aside>
    <footer>
      <div className="container">
        <nav>
          <ul id='social'>
            <li>
              <a href="https://github.com/pedro-drosa"><FiGithub/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pedrojuraci/">
                <FiLinkedin/>
              </a>
            </li>
            <li>
              <a href="https://slack.com/intl/pt-br/">
                <FiSlack/>
              </a>
            </li>
          </ul>
        </nav>
        <p>This project was created during the <a href="https://www.hiringcoders.com.br/">Hiring Coders</a> training,<br/> promoted by <a href="https://www.gama.academy/">Gama Academi</a> in partnership with <a href="https://vtex.com/br-pt/">V-Tex</a> <br/>and is under license from MIT.</p>
      </div>
    </footer>
  </>
  )
}