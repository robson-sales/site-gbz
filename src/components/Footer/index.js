import './style.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Desenvolvido com ❤️ por <a href="https://www.beeks.com.br">beeks</a> | ©
        {anoAtual} Todos os direitos reservados
      </p>
    </div>
  );
}
