import { useHistory } from 'react-router-dom';

import illutrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, signWithGoogle } = useAuth();

  //NAVEGAÇÃO ENTRE AS PAGINAS
  async function handleCreateRoom(){
    if(!user) {
      await signWithGoogle();
    }
    history.push('/rooms/new');
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={ illutrationImg } alt="ilustração Simbolizando Perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetmeAsk" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIcon} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}