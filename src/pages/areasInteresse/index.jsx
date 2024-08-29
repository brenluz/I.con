import { FaPencil, FaRegImage } from 'react-icons/fa6';
import { HiMiniCommandLine } from 'react-icons/hi2';
import { BsPersonFill } from 'react-icons/bs';
import { IoLogoGameControllerA } from 'react-icons/io';
import { PiGridNine } from 'react-icons/pi';
import Card from './Card.jsx';
import SafeView from '../../components/SafeView.jsx';

const CardsInfo = [
  {
    icon: <FaRegImage />,
    title: 'ARTE COMPUTACIONAL',
    text: 'Criação de obras de arte computacional interativa envolvendo a criação sonora ou visual.',
  },
  {
    icon: <HiMiniCommandLine />,
    title: 'INTELIGENCIA ARTIFICIAL',
    text: 'Técnicas de IA como Redes Neurais Artificiais (Deep Learn), Algorítmos Genéticos e Sistemas Multiagentes aplicadas à Interação Humano-Computador.',
  },
  {
    icon: <FaPencil />,
    title: 'CRIATIVIDADE COMPUTACIONAL',
    text: 'Sistemas autônomos capazes de gerar resultados emergentes através de expressão artística como compor música ou gerar imagens.',
  },
  {
    icon: <BsPersonFill />,
    title: 'INTERAÇÃO HUMANO-COMPUTADOR',
    text: 'Diferentes modos de interação a partir do uso de interfaces não convencionais, sobretudo nos perguntando que sensores um sistema computacional inteligente necessita para poder interagir, aprender e evoluir.',
  },
  {
    icon: <IoLogoGameControllerA />,
    title: 'JOGOS',
    text: 'Utilização dos jogos e da linguagem dos games para investigar o desenvolvimento de obras interativas que utilizam esses princípios a fim de ofederecer uma experiência mais lúdica para o interagente.',
  },
  {
    icon: <PiGridNine />,
    title: 'AMBIENTES IMERSIVOS',
    text: 'Compreender o papel da imersão do interagente na interação com um sistema computacional através do desenvolvimento de ambientes imersivos como Realidade Aumentada, CAVE ou Fulldome.',
  },
];

const AreaInteresse = () => {
  return (
    <SafeView id="interesse" classes="bg-[#EEEDEC] gap-x-5 py-8">
      <h2 className="font-bold text-3xl md:text-5xl mb-4 pt-20">
        <span className="text-main">ÁREAS DE</span> INTERESSE
      </h2>
      <p className="text-justify text-md md:text-2xl pt-6">
        {' '}
        Este espaço recorre à metodologia inter e transdisciplinar pois visa o
        trabalho construtivo, que se desenvolve a partir de várias áreas de
        conhecimento como a Ciência da Computação, Artes Visuais, Música,
        Psicologia, Biologia e Eletrônica.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10">
        {CardsInfo.map((card, index) => (
          <Card
            icon={card.icon}
            title={card.title}
            text={card.text}
            key={`card-${index}`}
          />
        ))}
      </div>
    </SafeView>
  );
};
export default AreaInteresse;
