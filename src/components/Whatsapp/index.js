import { BsWhatsapp } from 'react-icons/bs';
import './style.css';

export default function Whatsapp() {
  return (
    <div className="wap-link">
      <a
        href="https://api.whatsapp.com/send?phone=5511972065931"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp style={{ color: 'white' }} />
      </a>
    </div>
  );
}
