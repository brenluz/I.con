import { LuChevronDownCircle } from "react-icons/lu";

 const Hero = () => {
    return (
        <section className="bg-primary h-full flex items-center justify-center md:text-sm">
            <div id="home" className="flex flex-col items-center justify-center gap-9 py-6">
                <div className="text-7xl text-main font-bold">
                    <p><span className="text-white">Lab</span>oratorio de</p>
                    <p><span className="text-white">I</span>nteratividade,</p>
                    <p><span className="text-white">CO</span>mputação e</p>
                    <p><span className="text-white">N</span>ovas Interfaces</p>
                </div>
                <p className="text-white text-2xl text-center">
                    Estamos voltados para a <span className="font-bold">pesquisa, desenvolvimento e inovação</span> em  
                    <span className="font-bold text-main"> arte, ciência e tecnologia.</span> Focamos na aplicação de técnicas computacionais 
                    aplicadas, sobretudo, ao desenvolvimento de novas interfaces e 
                    sistemas interativos envolvendo Inteligência Artificial.
                </p>
                <a href="#about" className="text-white text-2xl gap-y-3 flex items-center hover:text-main">
                    <LuChevronDownCircle className="text-xl" /> Saiba mais
                </a>
            </div>
        </section>
    )
}

export default Hero