import {
  BsWhatsapp,
  BsTelephoneFill,
  BsMailbox,
  BsFillPinMapFill,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
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
            <br />
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
                <div className="contact-info">
                  <a
                    href="https://api.whatsapp.com/send?phone=5511972065931"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (11) 97206-5931
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <BsMailbox />
                </div>
                <div className="contact-info">
                  <a href="mailto:contato@gb.ind.br">contato@gb.ind.br</a>
                  <br />
                  <a href="mailto:comercial@gb.ind.br">comercial@gb.ind.br</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <BsFillPinMapFill />
                </div>
                <div className="contact-info">
                  Rua João Santana Leite, 100
                  <br />
                  Campo da Vila
                  <br />
                  Santana de Parnaíba - SP
                  <br />
                  CEP: 06501-238
                  <br />
                </div>
              </div>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14642.27110747452!2d-46.917929!3d-23.4399757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0397dc265b5b%3A0xe75bd48052406042!2sGB%20Zincagem%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1679577843744!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contact-social">
                <a
                  href="https://www.linkedin.com/company/galvanoplastiabarueri/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/gbzincagem/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.facebook.com/gbzincagem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
