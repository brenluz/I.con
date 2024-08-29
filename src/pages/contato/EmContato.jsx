import { HiOutlineMail } from 'react-icons/hi';
import { FaLocationDot } from 'react-icons/fa6';

const EntreContato = () => {
  return (
    // Waves controladas via png e repetidas
    <div className="flex flex-col justify-center items-center py-16">
      <h2 className="text-5xl uppercase text-slate-100 font-bold text-center mb-2">
        ENTRE EM CONTATO
      </h2>
      <p className="text-slate-100 text-center mb-2">
        Estamos abertos para dialogar e desenvolver pesquisa e projetos em
        parceria!
      </p>
      <a
        className="flex justify-center items-center gap-x-1 text-slate-100 font-bold mb-6"
        href="mailto:icon.ufba.br">
        <HiOutlineMail size={24} />
        <span className="text-lg">icon@ufba.br</span>
      </a>
      <div className="flex flex-col items-center">
        <FaLocationDot fill="white" size={28} className="mb-4" />
        <span className="text-slate-100">Universidade Federal da Bahia</span>
        <span className="text-slate-100">
          Instituto de Humanidades, Artes e Ciências
        </span>
        <span className="text-slate-100">
          Rua Barão de Jeremoabo, s/n, PAF-5, Sala 202
        </span>
        <span className="text-slate-100">Ondina – CEP 40170-115</span>
        <span className="text-slate-100">Salvador – Bahia – Brasil</span>
      </div>
    </div>
  );
};
export default EntreContato;
