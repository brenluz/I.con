import Membro from './Membro.jsx';
import data from '../../assets/membros.json';
import SafeView from '../../components/SafeView.jsx';

const QuemSomos = () => {
  return (
    <SafeView classes="px-20 py-10 flex flex-col bg-white" id="equipe">
      <h2 className="text-main text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold">
        <span>
          QUEM <span className="text-cinza">NÓS SOMOS?</span>{' '}
        </span>
      </h2>
      <div className="mt-10">
        <span className="text-md md:text-xl md:text-justify">
          Acima de tudo, somos um conjunto de pessoas interessadas em realizar
          pesquisa e desenvolver projetos interdisciplinares envolvendo novas
          tecnologias.
        </span>
      </div>
      <div className="flex flex-wrap mt-10 gap-3 justify-center">
        {data.members.map((membro) => (
          <Membro
            key={membro.name}
            nome={membro.name}
            cargo={membro.job}
            foto={membro.image}
          />
        ))}
      </div>
    </SafeView>
  );
};

export default QuemSomos;
