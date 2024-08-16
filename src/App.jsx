import "./App.css";

import About from "./pages/about/Index.jsx";
import AoVivo from "./pages/aovivo/Index.jsx";
import Contato from "./pages/contato/Index.jsx";
import QuemSomos from "./pages/equipe/Index.jsx";
import Ainteresse from "./pages/Ainteresse/index.jsx";

const App = () => {
	// Para rodar o app Va ao terminal e digite npm run dev
	return (<>
    	<About />
		<QuemSomos />
		<AoVivo />;
		<Contato/>
	</>);
};

export default App;
