
import Membro from "./Membro.jsx";
import data from "../../assets/membros.json";

const QuemSomos = () => {
	return (
		<div className="px-20 py-10 mt-10 flex flex-col" id="equipe">
			<div className="">
				<h2 className="font-bold text-[3.5rem]">
					<span className="text-main">QUEM </span>
					<span className="text-cinza"> NÓS SOMOS?</span>
				</h2>
				<div className="mt-10" >
					<span className= "text-cinza text-2xl">
						Acima de tudo, somos um conjunto de pessoas interessadas em realizar
						pesquisa e desenvolver projetos interdisciplinares envolvendo novas
						tecnologias.
					</span>
				</div>
				
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
		</div>
	);
};

export default QuemSomos;
