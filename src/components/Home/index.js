import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Home() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <div className="banner">
      <div className="text-over-left">
        <h1> GB Zincagem</h1>
        <h2>
          <br />
          <br />
          Experiência e qualidade em
          <br />
          tratamentos superficiais,
          <br />
          para resultados duradouros
          <br />
          que transformam mais que
          <br />
          metais, transformam vidas.
        </h2>
        <br />
        <br />
        <br />
        <button type="submit" onClick={handleContact}>
          Fale com a gente
        </button>
      </div>
    </div>
  );
}
