import {
  BsWhatsapp,
  BsTelephoneFill,
  BsMailbox,
  BsFillPinMapFill,
} from 'react-icons/bs';
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
            <div className="contact-data">
              <div className="contact-item">
                <div className="contact-ico">
                  <BsTelephoneFill />
                </div>
                <div className="contact-info">(11) 3199-3787 / 3199-3788</div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <BsWhatsapp />
                </div>
                <div className="contact-info">(11) 9999-1234</div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <BsMailbox />
                </div>
                <div className="contact-info">
                  <a href="mailto:contato@gb.ind.br">contato@gb.ind.br</a>
                  <a href="mailto:comercial@gb.ind.br">comercial@gb.ind.br</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <BsFillPinMapFill />
                </div>
                <div className="contact-info">
                  Rua João Santana Leite, 100 Campo da Vila - Santana de
                  Parnaíba - SP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
