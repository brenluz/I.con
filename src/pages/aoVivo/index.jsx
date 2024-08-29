import Camera from './Camera.jsx';
import SafeView from '../../components/SafeView.jsx';

const AoVivo = () => {
  return (
    <SafeView id="aovivo" classes="bg-cinza items-center py-5 pb-16">
      <div className="flex justify-left items-center py-16">
        <h2 className="font-bold text-main text-6xl">AO VIVO</h2>
      </div>
      <div className="flex justify-center">
        <Camera />
      </div>
    </SafeView>
  );
};

export default AoVivo;
