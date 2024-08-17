import { FaRegImage } from "react-icons/fa6";
import { HiMiniCommandLine } from "react-icons/hi2";
import Card from "./Card.jsx";

const Ainteresse = () => {
    return( 
        <div id="interesse" className="bg-[#EEEDEC] flex flex-col h-max py-8 px-10 gap-x-2 justify-start">
            <h2 className="font-bold text-3xl md:text-5xl mb-4"> <span className="text-main">ÁREAS DE</span> INTERESSE</h2>
            <p className="justify-start text-md md:text-xl"> Este espaço recorre à metodologia inter e transdisciplinar pois visa o trabalho construtivo, que se desenvolve a partir de várias áreas de conhecimento como a Ciência da Computação, Artes Visuais, Música Psicologia, Biologia e Eletrônica.</p>
       
            <div className="flex flex-row">
                <Card icon={<FaRegImage/>} title="Arte Computacional" text="Criação de obras de arte computacional interativa envolvendo a criação sonora ou visual."/>
                <Card icon={<HiMiniCommandLine/>} title="Inteligência Artificial" text="Técnicas de IA como Redes Neurais Artificiais (Deep Learn), Algorítmos Genéticos e Sistemas Multiagentes aplicadas à Interação Humano-Computador."/>
            </ div>
        </div>

    )
}
export default Ainteresse;