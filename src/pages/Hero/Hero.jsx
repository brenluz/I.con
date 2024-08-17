import { LuChevronDownCircle } from "react-icons/lu";

export function Hero() {
    return (
        <section className="bg-primary w-full h-hero flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-[35px]">
                <div className="text-[70px] text-main font-bold leading-[75px]">
                    <span className="text-white">Lab</span>oratorio de <br/>
                    <span className="text-white">I</span>nteratividade, <br/>
                    <span className="text-white">CO</span>mputação e  <br/>
                    <span className="text-white">N</span>ovas Interfaces
            
                </div>
                <p className="text-white text-[25px] max-w-[1025px] text-center">
                    Estamos voltados para a <span className="font-bold">pesquisa, desenvolvimento e inovação</span> em  
                    <span className="font-bold text-main"> arte, ciência e tecnologia.</span> Focamos na aplicação de técnicas computacionais 
                    aplicadas, sobretudo, ao desenvolvimento de novas interfaces e 
                    sistemas interativos envolvendo Inteligência Artificial.
                </p>
                <a href="#about" className="text-white text-[25px] gap-3 flex items-center">
                    <LuChevronDownCircle className="text-[20px]" /> Saiba mais
                </a>
            </div>
        </section>
    )
}