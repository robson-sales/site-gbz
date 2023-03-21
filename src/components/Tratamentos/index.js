import { useParams } from 'react-router-dom';
import './style.css';
import { getTratamento } from './tratamentosItems';

export default function Tratamentos() {
  const { item } = useParams();
  const tratamento = getTratamento(item);

  return (
    <>
      <div className="service">
        <div className="service-content">
          <div className="service-content-img">
            <img src={tratamento.image} alt="Imagem do tratamento" />
          </div>
          <div className="service-content-txt">
            <h1>{tratamento.title}</h1>
            <br />
            {tratamento.description.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
