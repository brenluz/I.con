
const About = () => {
    return (
        <div id="about" className="bg-[#3E4349] h-full p-16 text-slate-100 text-2xl flex flex-col gap-y-10">
            <div className= "py-8">
                <span className="text-6xl font-bold ">
                    <span className="text-main"> SOBRE O </span>
                    <span className= "text-slate-100">ICON</span>
                </span>
            </div>
            <div>
                <span>
                    O ICON - Laboratório de Pesquisa, Desenvolvimento e Inovação em Interatividade, Computação e Novas Interfaces - está localizado dentro do Instituto de Humanidades, Artes e Ciências Prof. Milton Santos (IHAC) na Universidade Federal da Bahia (UFBA) e tem como principal objetivo desenvolver pesquisas de relevância e impacto acadêmico, além de fomentar a inovação artística, científica e tecnológica. Estas pesquisas conduzidas no laboratório devem oferecer aos estudantes de graduação e pós-graduação um ambiente inovador e criativo a fim de fomentar o desenvolvimento acadêmico e profissional dos envolvidos.
                </span>
                
            </div>
            <div>
                <span>
                    Fundamentado em um tripé
                    <span className="text-main text-2xl flex-wrap"> ARTE/CIÊNCIA/EDUCAÇÃO </span>
                     o espaço busca estabelecer parcerias com centros e pesquisadores nacionais e internacionais. Estas parcerias têm como função criar uma rede de pesquisa sólida, capaz de fomentar o desenvolvimento das pesquisas realizadas no âmbito do laboratório e de oferecer aos pesquisadores e artistas de outras instituições um espaço capaz de recebe-los para desenvolver trabalhos científicos e artísticos
                </span>
            </div>
            <div className="flex flex-col gap-y-3 text-sm">
                <span className="">
                    Sob este prisma, podemos ainda listar os seguintes objetivos:
                </span>
                <ul>
                    <li>- Produzir e disseminar inovações tecnológicas;</li>
                    <li>- Acolher pesquisadores de programas de pós-graduação;</li>
                    <li>- Desenvolver projetos institucionais, interinstitucionais e interlaboratoriais;</li>
                    <li>- Estabelecer um diálogo com o mercado a fim de identificar as demandas de novas tecnologias;</li>
                    <li>- Oferecer cursos de extensão;</li>
                    <li>- Organizar e promover eventos científicos e artísticos;</li>
                    <li>- Dar visibilidade para as pesquisas desenvolvidas através da participação em congressos, simpósios e encontros;</li>
                    <li>- Disponibilizar o resultado das pesquisas através da publicação de artigos, capítulos e livros;</li>
                    <li>- Interagir com a comunidade artística e científica local para desenvolvimento de projetos integradores</li>
                </ul>
            </div>
        </div>
    );
}

export default About;