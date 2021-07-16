import {FormEvent, useState} from 'react';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import { FiGithub, FiLinkedin, FiSlack } from 'react-icons/fi';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

import backgroundImg from '../../assets/images/background.jpg'; 
import controllImg from '../../assets/images/controll.jpg'; 

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  const [newEmail, setNewEmail] = useState<string>('');
  const customId = 'custom-id-validate';
  
  async function formValidation(value: string): Promise<boolean> {
    const Schema = Yup.object().shape({
      email: Yup.string().email().required(),
    })
    
    if(!(await Schema.isValid({ email:value }))) {
      return false;
    }
    return true;
  }
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if(!(await formValidation(newEmail))) {
      return toast.error("Please, type a valid email!", { toastId: customId});
    } 
    
    localStorage.setItem('[HC]landingpage', newEmail);
    setNewEmail('');
      
    return toast.success(`${localStorage.getItem('[HC]landingpage')}, registered successfully!`,{toastId: customId});
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
    <main id="form" style={backgroundStyle}>
      <div className='container'>
        <div>
          <span>The All new 518/588 DPI.</span>
          <h1>Remarkable Performance</h1>
          <p>Register your email to receive pre-sale offers, and save up to 50 to 75% at the Xbox Store with exclusive discounts.</p>
          <form onSubmit={handleSubmit}>
            <Input
              type="email" 
              placeholder="Enter your best email"
              onChange= { e => setNewEmail(e.target.value)}
              value={newEmail} 
            />
            <Button className="button" type='submit'>REGISTER<ToastContainer/></Button>
          </form>
        </div>
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
          <a href="#form" className="button">Sign Up</a>
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
        <p>This project was created during the <a href="https://www.hiringcoders.com.br/">Hiring Coders</a> training,<br/> promoted by <a href="https://www.gama.academy/">Gama Academy</a> in partnership with <a href="https://vtex.com/br-pt/">V-Tex</a> <br/>and is under license from MIT.</p>
      </div>
    </footer>
  </>
  )
}
