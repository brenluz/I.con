import { LuChevronDownCircle } from "react-icons/lu";

 const Index = () => {
    return (
        <section className="h-full flex items-center justify-center">
            <div id="home" className="flex flex-col min-w-[80vw] max-w-5xl items-center justify-center gap-9 py-6 px-4 sm:px-10">
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-main font-bold text-start">
                    <p><span className="text-white">Lab</span>oratorio de</p>
                    <p><span className="text-white">I</span>nteratividade,</p>
                    <p><span className="text-white">CO</span>mputação e</p>
                    <p><span className="text-white">N</span>ovas Interfaces</p>
                </div>
                <p className="text-white text-xl sm:text-2xl text-center">
                    Estamos voltados para a <span className="font-bold">pesquisa, desenvolvimento e inovação</span> em  
                    <span className="font-bold text-main"> arte, ciência e tecnologia.</span> Focamos na aplicação de técnicas computacionais 
                    aplicadas, sobretudo, ao desenvolvimento de novas interfaces e 
                    sistemas interativos envolvendo Inteligência Artificial.
                </p>
                <a href="#about" className="flex items-center text-white text-2xl hover:text-main">
                    <LuChevronDownCircle size={20} />
                    <span className="ml-2" >Saiba mais</span>
                </a>
            </div>
        </section>
    )
}

export default Index