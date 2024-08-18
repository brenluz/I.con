import { FaRegImage } from "react-icons/fa6";
import { HiMiniCommandLine } from "react-icons/hi2";
import { FaPencil } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { IoLogoGameControllerA } from "react-icons/io";
import { PiGridNine } from "react-icons/pi";
import Card from "./Card.jsx";

const Ainteresse = () => {
    return( 
        <div id="interesse" className="bg-[#EEEDEC] flex flex-col h-max px-10 gap-x-5 justify-start py-8">
            <h2 className="font-bold text-3xl md:text-5xl mb-4 pt-20"> <span className="text-main">ÁREAS DE</span> INTERESSE</h2>
            <p className="justify-start text-md md:text-2xl pt-6"> Este espaço recorre à metodologia inter e transdisciplinar pois visa o trabalho construtivo, que se desenvolve a partir de várias áreas de conhecimento como a Ciência da Computação, Artes Visuais, Música Psicologia, Biologia e Eletrônica.</p>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
            <div className="flex flex-row">
                <Card icon={<FaRegImage/>} title="ARTE COMPUTACIONAL" text="Criação de obras de arte computacional interativa envolvendo a criação sonora ou visual."/>

                <Card icon={<HiMiniCommandLine/>} title="INTELIGÊNCIA ARTICIAL" text="Técnicas de IA como Redes Neurais Artificiais (Deep Learn), Algorítmos Genéticos e Sistemas Multiagentes aplicadas à Interação Humano-Computador."/>

                <Card icon={<FaPencil/>} title= "CRIATIVIDADE COMPUTACIONAL" text= "Sistemas autônomos capazes de gerar resultados emergentes através de expressão artística como compor música ou gerar imagens."/>

                <Card icon={<BsPersonFill/>} title="INTERAÇÃO HUMANO-COMPUTADOR" text="Diferentes modos de interação a partir do uso de interfaces não convencionais, sobretudo nos perguntando que sensores um sistema computacional inteligente necessita para poder interagir, aprender e evoluir."/>

                <Card icon={<IoLogoGameControllerA />} title="JOGOS" text="Utilização dos jogos e da linguagem dos games para investigar o desenvolvimento de obras interativas que utilizam esses princípios a fim de ofederecer uma experiência mais lúdica para o interagente."/>

                <Card icon={<PiGridNine/>} title= "AMBIENTES IMERSIVOS" text="Compreender o papel da imersão do interagente na interação com um sistema computacional através do desenvolvimento de ambientes imersivos como Realidade Aumentada, CAVE ou Fulldome."/>

            </ div>

        </div>

    ) 
}
export default Ainteresse;