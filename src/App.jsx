import About from "./pages/about-page/Index.jsx";
import "./App.css";
import AoVivo from "./pages/Aovivo/Index.jsx";
import Contato from "./pages/contato-page/contato.jsx";

const App = () => {
	// Para rodar o app Va ao terminal e digite npm run dev
	return (<>
    <About />
		<AoVivo />;
		<Contato/>
	</>);
};

export default App;
