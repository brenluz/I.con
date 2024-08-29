import EntreContato from './EmContato.jsx';
import EnvieMensagem from './EnvieMensagem.jsx';
import SafeView from '../../components/SafeView.jsx';

const Contato = () => {
  return (
    <div className="w-full">
      <SafeView
        id="contato"
        classes="bg-main bg-[url(https://icon.ufba.br/img/top-waves.png)] bg-top bg-repeat-x">
        <EntreContato />
      </SafeView>
      <SafeView id="contato" classes="bg-[#222629]">
        <EnvieMensagem />
      </SafeView>
      <div className="bg-slate-100 flex flex-col justify-center items-center bg-[url(https://icon.ufba.br/img/top-waves.png)] bg-repeat-x bg-top py-16" />
    </div>
  );
};
export default Contato;
