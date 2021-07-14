import './style.scss';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

import backgroundImg from '../../assets/images/background.jpg'; 

export function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }

  return(
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
  )
}