import { Fragment, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ThemedText } from "./ThemedText";

export function GamePage() {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "../../../builds/maze/1.2/maze1.2.loader.js",
        dataUrl: "../../../builds/maze/1.2/maze1.2.data.unityweb",
        frameworkUrl: "../../../builds/maze/1.2/maze1.2.framework.js.unityweb",
        codeUrl: "../../../builds/maze/1.2/maze1.2.wasm.unityweb",
    }); 

    const handleGameOver = useCallback(() => {
        window.open( "./desk", "_self")
    }, []);

    useEffect(() => {
        window.addEventListener("ExitGame", handleGameOver);
        return () => {
            window.removeEventListener("ExitGame", handleGameOver);
        };
    }, [Unity, handleGameOver]);

    return (
        <Fragment>
            {!isLoaded && (
                <ThemedText
                    type='default'
                    lightColor='#9896AA'
                    darkColor='#9896AA'
                >
                    <p>Loading... {Math.round(loadingProgression * 100)}%</p>
                </ThemedText>
            )}
            <Unity
                unityProvider={unityProvider}
                style={{ visibility: isLoaded ? "visible" : "hidden" }}
            />
        </Fragment>
    );    
}