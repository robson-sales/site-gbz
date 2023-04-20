import { useEffect } from 'react';
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
      </div>
    </div>
  );
}
