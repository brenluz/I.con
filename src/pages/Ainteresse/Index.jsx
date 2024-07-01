import { FaRegImage } from "react-icons/fa6";
import Card from "./Card.jsx";

const Ainteresse = () => {
    return( 
        <div className="bg-[#EEEDEC] flex flex-col h-max py-8 px-10 gap-x-2 justify-start">
            <h2 className="font-bold text-3xl md:text-5xl mb-4"> <span className="text-main">ÁREAS DE</span> INTERESSE</h2>
            <p className="justify-start text-md md:text-xl"> Este espaço recorre à metodologia inter e transdisciplinar pois visa o trabalho construtivo, que se desenvolve a partir de várias áreas de conhecimento como a Ciência da Computação, Artes Visuais, Música Psicologia, Biologia e Eletrônica.</p>
       
            <div>
                <Card icone={<FaRegImage/>} title="titulo" text="coloque o texto aqui"/>
            </ div>

        </div>

    )
}
export default Ainteresse;