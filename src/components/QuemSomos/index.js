import '../../Styles/pageStyle.css';
import historia from '../../assets/images/gb-historia.jpg';
import lab from '../../assets/images/Lab01.jpg';

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
            <br />
            <h3>Proteção e qualidade para o seu metal desde 1986</h3>
            <br />
            <p>
              A GB Zincagem é uma empresa de galvanoplastia que existe desde
              1986 e que se destaca no mercado em que atua.
            </p>

            <p>
              Somos comprometidos com o atendimento aos diversos seguimentos do
              mercado, seguimos aprimorando continuamente nossos processos,
              atendendo à normas dos setores Automotivo, Petróleo e Gás,
              Máquinas e Equipamentos, Agrícola, Aeronáutica e Geração,
              Transmissão e Distribuição de Energia Elétrica.
            </p>

            <p>
              Ao longo dos anos, a GB Zincagem enfrentou diversos desafios, e
              para superar esses obstáculos, a empresa se adaptou às mudanças e
              investiu em inovação e qualidade.
            </p>

            <p>
              Atuamos com os melhores fornecedores do mercado, tanto em
              matérias-primas, quanto em processos e tecnologias, possuímos um
              contingente altamente treinado, controle laboratorial, com as
              Certificações e Licenças de Órgãos Públicos e Sistema de Gestão de
              Qualidade certificado com base na norma NBR ISO 9001.
            </p>
          </div>
        </div>
      </div>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={lab} alt="Logotipo da AWS" />
          </div>
          <div className="section-gw-content-txt">
            <p>
              Possuímos todos os Certificados e Licenças requeridas para o total
              funcionamento, e também temos uma Central de Tratamento de
              Efluentes, conforme padrões da Cetesb.
            </p>

            <p>
              Um dos principais diferenciais da GB Zincagem é o serviço de
              galvanização a fogo. A galvanização a fogo consiste em limpar as
              peças de ferro ou aço e imergi-las em zinco líquido, formando uma
              camada protetora contra a corrosão. Esse processo garante maior
              resistência e durabilidade às peças que são expostas às condições
              climáticas extremas.
            </p>

            <p>
              Com esse serviço, a GB Zincagem conquistou parcerias com empresas
              líderes no mercado. Além disso, a empresa ampliou sua capacidade
              produtiva e diversificou seus serviços, atendendo também outros
              segmentos industriais.
            </p>

            <p>
              A GB Zincagem é uma empresa que tem orgulho da sua trajetória e
              que está sempre buscando se atualizar e se preparar para os novos
              desafios do mercado. Com mais de 30 anos de experiência, ela
              oferece soluções completas em galvanoplastia com qualidade,
              segurança e responsabilidade ambiental.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
