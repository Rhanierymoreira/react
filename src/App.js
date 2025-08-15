import logo from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <button
  className="botao"
  onClick={() => window.location.href = "https://rhanierymoreira.github.io/portfolio/"}
>
  Algum botão
</button>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Rhaniery Moreira</code> and install a trojan in your computer free.
        </p>
        
        <a
          className="App-link"
          href="https://vercel.com/rhanierymoreiras-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ola Mundo! Entrem no meu vercel
        </a>
        <div class="space">Holá, que tal?</div>
        
      </header>
    </div>
  );
}

export default App;
