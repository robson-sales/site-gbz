import { useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import './style.css';

export default function Home() {
  const title = 'GB Zincagem | Tratamento Superficial e Galvanização a Fogo';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="banner">
      <div className="text-over-left">
        <h1>GB Zincagem</h1>
        <h2>
          Especialista em tratamento protetivo <br />
          em metais, com pontualidade e<br /> preços competitivos.
        </h2>
        <br />
        <a
          href="https://api.whatsapp.com/send?phone=5511972065931"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para acessar nosso WhatsApp de contato"
        >
          <button type="submit" className="button">
            <BsWhatsapp color="white" fontSize="12px" /> Solicite um orçamento{' '}
          </button>
        </a>
      </div>
    </div>
  );
}
