import { FaInstagram } from 'react-icons/fa';
import IconLogo from '../../assets/images/logo-b.png';

const content = [
  {
    title: 'HOME',
    link: '#home',
  },
  {
    title: 'SOBRE',
    link: '#about',
  },
  {
    title: 'EQUIPE',
    link: '#equipe',
  },
  {
    title: 'ÁREAS DE INTERESSE',
    link: '#interesse',
  },
  {
    title: 'AO VIVO',
    link: '#aovivo',
  },
  {
    title: 'CONTATO',
    link: '#contato',
  },
];

const Header = () => {
  return (
    <nav className="flex items-center justify-center py-6 px-12 text-xs min-w-[80vw] max-w-5xl">
      <div className="flex flex-row justify-center md:justify-between w-full">
        <img src={IconLogo} alt="Logo do Laboratório ICON" className="flex" />
        <div className="hidden md:pl-8 md:flex md:text-white md:items-center md:justify-center md:font-medium md:gap-x-4">
          {content.map((item, index) => (
            <a
              href={item.link}
              key={`${index}-header`}
              className="text-xs w-max font-medium text-center hover:text-main">
              {item.title}
            </a>
          ))}
          <a
            href="https://www.instagram.com/lab.icon/"
            className="hover:text-main">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
