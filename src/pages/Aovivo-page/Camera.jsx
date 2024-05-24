import styles from './Aovivo.module.css';

const Camera = () => {
  return(
    <div className={styles.camera}>  
     <iframe 
        width="560"
        height="315" 
        src="https://www.youtube.com/embed/1JYgjYdJ9Z4"
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
    </div>
  );  
}

export default Camera;