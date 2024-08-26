import * as PropTypes from "prop-types";
import {Component} from "react";

class Membro extends Component {
	render() {
		let {foto, nome, cargo} = this.props;
		return (
			<div className="flex flex-col">
				<div className="flex flex-wrap size-52">
					<img className="p-0.5 object-cover size-full rounded-md" src={foto} alt="Foto do iconico"/>
				</div>
				<div className="ml-3 my-3">
					<h3 className="text-cinza">{nome}</h3>
					<p className="text-[#939AA2] text-xs">{cargo}</p>
				</div>

			</div>
		);
	}
}

Membro.propTypes = {
	foto: PropTypes.any,
	nome: PropTypes.string,
	cargo: PropTypes.string
}

export default Membro;
