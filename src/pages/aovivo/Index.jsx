import styles from './Aovivo.module.css'
import Camera from './Camera.jsx'

const Aovivo = () => {
    return (
        <div id="aovivo" className="bg-cinza items-center h-full py-5 pb-16">
            <div className="flex justify-left items-center p-16">
                <h2 className="font-bold text-main text-6xl">AO VIVO</h2>
            </div>
            <div className="flex justify-center">
                <Camera /> 
            </div>

        </div>
    )
}

export default Aovivo