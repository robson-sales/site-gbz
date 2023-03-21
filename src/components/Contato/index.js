import './style.css';

export default function Contato() {
  return (
    <>
      <div className="contact">
        <div className="contact-content">
          <div className="contact-content-img"></div>
          <div className="contact-content-txt">
            <h2>Contato</h2>
            <br />
            <p>
              <strong>
                Descubra como podemos ajudar a potencializar seu negócio.
              </strong>
            </p>
            <br />
            <p>
              🗺️
              <br />
              Rua João Santana Leite, 100
              <br />
              Campo da Vila - Santana de Parnaíba - SP
            </p>
            <br />
            <p>
              ☎️ <br />
              (11) 3199-3787 / 3199-3788
              <br />
              <br />
              ✉️
              <br />
              <a href="mailto:contato@gb.ind.br">contato@gb.ind.br</a>
              <br />
              <a href="mailto:comercial@gb.ind.br">comercial@gb.ind.br</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
