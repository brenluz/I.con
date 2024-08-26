import { FaInstagram } from "react-icons/fa";
import IconLogo from "../../assets/images/logo-b.png"
// https://icon.ufba.br/img/logo-b.png

const Header = () => {
    return (
        <div className="bg-primary flex items-center justify-between py-6 px-12 border-b-4 text-xs">
            <img src={IconLogo} alt="logo" className="hidden sm:flex" />
            <div className="text-white flex  items-center justify-center font-medium md:gap-7 lg:gap-7 sm:gap-x-2">
                <a href="#home" className="hover:text-main font-medium">HOME</a>
                <a href="#about" className="hover:text-main font-medium">SOBRE</a>
                <a href="#equipe" className="hover:text-main font-medium">EQUIPE</a>
                <a href="#interesse" className="hover:text-main font-medium ">ÁREAS DE INTERESSE</a>
                <a href="#aovivo" className="hover:text-main font-medium">AO VIVO</a>
                <a href="#contato" className="hover:text-main font-medium">CONTATO</a>
                <a href="https://www.instagram.com/lab.icon/" className="hover:text-main">
                    <FaInstagram className="text-3xl md:text-md"/>
                </a>
            </div>
        </div>
    )
}

export default Header
