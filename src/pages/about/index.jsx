import SafeView from '../../components/SafeView.jsx';

const About = () => {
  return (
    <SafeView id="about" classes="bg-[#3E4349]">
      <div className="py-8 flex justify-center md:justify-start">
        <span className="text-main text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold">
          SOBRE O <span className="text-slate-100">ICON</span>
        </span>
      </div>
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <p className="text-md text-slate-100 md:text-xl md:text-justify">
          O ICON - Laboratório de Pesquisa, Desenvolvimento e Inovação em
          Interatividade, Computação e Novas Interfaces - está localizado dentro
          do Instituto de Humanidades, Artes e Ciências Prof. Milton Santos
          (IHAC) na Universidade Federal da Bahia (UFBA) e tem como principal
          objetivo desenvolver pesquisas de relevância e impacto acadêmico, além
          de fomentar a inovação artística, científica e tecnológica. Estas
          pesquisas conduzidas no laboratório devem oferecer aos estudantes de
          graduação e pós-graduação um ambiente inovador e criativo a fim de
          fomentar o desenvolvimento acadêmico e profissional dos envolvidos.
        </p>
        <p className="text-md text-slate-100 md:text-xl md:text-justify">
          Fundamentado em um tripé{' '}
          <span className="text-main font-semibold">
            ARTE/ CIÊNCIA/ EDUCAÇÃO
          </span>{' '}
          o espaço busca estabelecer parcerias com centros e pesquisadores
          nacionais e internacionais. Estas parcerias têm como função criar uma
          rede de pesquisa sólida, capaz de fomentar o desenvolvimento das
          pesquisas realizadas no âmbito do laboratório e de oferecer aos
          pesquisadores e artistas de outras instituições um espaço capaz de
          recebe-los para desenvolver trabalhos científicos e artísticos
        </p>

        <div className="flex flex-col gap-y-3">
          <p className="text-md text-slate-100 md:text-xl">
            Sob este prisma, podemos ainda listar os seguintes objetivos:
          </p>
          <ul className="text-md text-slate-100 md:text-xl md:text-justify">
            <li>- Produzir e disseminar inovações tecnológicas;</li>
            <li>- Acolher pesquisadores de programas de pós-graduação;</li>
            <li>
              - Desenvolver projetos institucionais, interinstitucionais e
              interlaboratoriais;
            </li>
            <li>
              - Estabelecer um diálogo com o mercado a fim de identificar as
              demandas de novas tecnologias;
            </li>
            <li>- Oferecer cursos de extensão;</li>
            <li>- Organizar e promover eventos científicos e artísticos;</li>
            <li>
              - Dar visibilidade para as pesquisas desenvolvidas através da
              participação em congressos, simpósios e encontros;
            </li>
            <li>
              - Disponibilizar o resultado das pesquisas através da publicação
              de artigos, capítulos e livros;
            </li>
            <li>
              - Interagir com a comunidade artística e científica local para
              desenvolvimento de projetos integradores
            </li>
          </ul>
        </div>
      </div>
    </SafeView>
  );
};

export default About;
