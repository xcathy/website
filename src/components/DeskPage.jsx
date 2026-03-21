import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Games } from '../constants/Games';
import '../styles/global.css';
import '../styles/theme.css';
import './DeskPage.css';
import { useNavigate } from "react-router-dom";

export function DeskPage() {
    const navigate = useNavigate();
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: Games.deskLoaderUrl,
        dataUrl: Games.deskDataUrl,
        frameworkUrl: Games.deskFrameworkUrl,
        codeUrl: Games.deskCodeUrl,
    });

    //const handleGameOver = () => { navigate('/game') };

    //useEffect(() => {
    //    window.addEventListener("ExitGame", handleGameOver);
    //    return () => {
    //        window.removeEventListener("ExitGame", handleGameOver);
    //    };
    //}, [Unity, handleGameOver]);

    return (
        <div className='main-container'>
            {!isLoaded && (
                <p className='raleway-default default-white' >Loading... {Math.round(loadingProgression * 100)}%</p>
            )}
            <Unity
                unityProvider={unityProvider}
                style={{ visibility: isLoaded ? "visible" : "hidden", width: '100vw', height: '94vh', marginTop: '6vh' }}
            />
        </div>
    );    
}