import './style.scss';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

import backgroundImg from '../../assets/images/background.jpg'; 
import userImg from '../../assets/images/user.jpg'; 

export function Home() {
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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, esse quae. Reprehenderit sunt, consequatur nobis velit eveniet ratione voluptates aliquid!</p>
          <form>
            <Input type="email" placeholder="Digite seu melhor E-mail"/>
            <Button type='button'>Cadastrar</Button>
          </form>
        </header>
      </div>
    </main>
    <aside>
      <section>
        <div className="photo">
          <img src={userImg} alt="user" />
        </div>
        <div className="photo-content">
          <h1>GET AMAZING RESULT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      </section>
    </aside>
  </>
  )
}