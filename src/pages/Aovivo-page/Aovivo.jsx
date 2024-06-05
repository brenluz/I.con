import styles from './Aovivo.module.css';
import Camera from './Camera.jsx';

const Aovivo = () => {
    return (
        <div className={styles.background}>
            <div className={styles.Aovivo}>
                <h2 className={styles.texto}>AO VIVO</h2>
            </div>
            <div className={styles.CameraContainer}>
                <Camera /> 
            </div>
        </div>
    );
}

export default Aovivo;