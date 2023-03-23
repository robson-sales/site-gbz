import './style.css';
import certificateEn from '../../assets/docs/GB Zincagem - ISO 9001.2015 - en.pdf';

export default function Contato() {
  return (
    <>
      <div className="qualidade">
        <div className="qualidade-content">
          <div className="qualidade-content-img"></div>
          <div className="qualidade-content-txt">
            <h2>Qualidade</h2>
            <br />
            <h4> Somos certificados ISO 9001</h4>
            <br />
            <p>
              O processo de qualidade é fundamental para qualquer empresa que
              deseja se destacar em um mercado competitivo, e isso não é
              diferente aqui na GB Zincagem.
            </p>
            <p>
              A GB Zincagem oferece serviços de galvanoplastia com qualidade e
              eficiência. Utilizamos equipamentos modernos e materiais de
              primeira linha para garantir um acabamento perfeito e durável em
              suas peças metálicas. Temos experiência em diversos tipos de
              revestimentos.
            </p>
            <p>
              Nossos processos de qualidade ajudam a garantir que nossos
              serviços estejam de acordo com as normas e padrões estabelecidos
              pela indústria. Isso significa que nós atenderemos melhor as
              necessidades de nossos clientes e forneceremos serviços de alta
              qualidade, que atendam às especificações exigidas pelos setores em
              que ele atua.
            </p>
            <p>
              Através do nosso sistema de gestão da qualidade, monitoramos
              continuamente nossos processos, identificando pontos fracos e
              implementando melhorias para garantir que nossos serviços sejam
              cada vez mais eficientes e eficazes.
            </p>
            <p>
              A GB Zincagem mantém um Sistema de Gestão de Qualidade certificado
              com base na norma NBR ISO 9001. Nossa equipe é altamente
              qualificada para atuar no controle de todos os pontos do processo.
              Mantemos nossa equipe de colaboradores atualizados e em contínuo
              programa de capacitação.
            </p>
            <p>
              Possuímos um laboratório químico completo, para a realização de
              análises periódicas em nossos banhos, ensaios de corrosão (Salt
              Spray) e emissão de Certificados de Qualidade, Controle gráfico de
              Desidrogenização.
            </p>
            <p>
              <strong>
                Somos homologados nos padrões PETROBRAS, Eólicas, Aéreas e
                Solar.
              </strong>
            </p>
            <div>
              <div className="certificate-download">
                <a href={certificateEn} download="Certificado EN">
                  Baixar Certificado (EN)
                </a>
              </div>
              <br />
              <div className="certificate-download">
                <a href={certificateEn} download="Certificado PT-BR">
                  Baixar Certificado (PT-BR)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
