import '../../Styles/solutionStyle.css';
import historia from '../../assets/images/gb-historia.jpg';
import certificado from '../../assets/images/certificado.webp';

export default function QuemSomos() {
  return (
    <>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={historia} alt="Logotipo da AWS" />
          </div>
          <div className="section-gw-content-txt">
            <h2>Nossa história</h2>
            <p>
              Fundada em 1986 como prestadora de serviços de zincagem, nos
              consolidamos rapidamente no mercado de tratamento de superfícies,
              expandindo e diversificando rapidamente nossa linha de
              fornecimento.{' '}
            </p>
            <p>
              Somos comprometidos com o atendimento aos diversos seguimentos do
              mercado, seguimos aprimorando continuamente nossos processos,
              atendendo à normas dos setores Automotivo, Petróleo e Gás,
              Máquinas e Equipamentos, Agrícola, Aeronáutica e Geração,
              Transmissão e Distribuição de Energia Elétrica.{' '}
            </p>
            <p>
              Atuamos com os melhores fornecedores do mercado, tanto em
              matérias-primas, quanto em processos e tecnologias, possuímos um
              contingente altamente treinado, controle laboratorial, com as
              Certificações e Licenças de Órgãos Públicos e Sistema de Gestão de
              Qualidade certificado com base na norma NBR ISO 9001.
            </p>
            <p>
              Possuímos todos os Certificados e Licenças requeridas para o total
              funcionamento, e também temos uma Central de Tratamento de
              Efluentes, conforme padrões da Cetesb.
            </p>
          </div>
        </div>
      </div>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={certificado} alt="Logotipo da AWS" />
          </div>
          <div className="section-gw-content-txt">
            <h2>Qualidade</h2>
            <p>
              A GB mantém um Sistema de Gestão de Qualidade certificado com base
              na norma NBR ISO9001.
            </p>

            <p>
              Nossa equipe é altamente qualificada para atuar no controle de
              todos os pontos do processo.
            </p>

            <p>
              Mantemos nossa equipe de colaboradores atualizados e em contínuo
              programa de capacitação.
            </p>

            <p>
              Possuímos um laboratório químico completo, para a realização de
              análises periódicas em nossos banhos, ensaios de corrosão (Salt
              Spray) e emissão de Certificados de Qualidade, Controle gráfico de
              Desidrogenização.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
