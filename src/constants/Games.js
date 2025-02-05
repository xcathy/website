// Maze
const gamePath = `${process.env.PUBLIC_URL}/builds/maze1.2/`;
const htmlPath = gamePath + 'index.html';
const buildPath = gamePath + 'Build/';

const loaderUrl = buildPath + "maze1.2.loader.js";
const dataUrl = buildPath + "maze1.2.data.unityweb";
const frameworkUrl = buildPath + "maze1.2.framework.js.unityweb";
const codeUrl = buildPath + "maze1.2.wasm.unityweb";

export const Games = {
    gamePath,
    htmlPath,
    buildPath,
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
};
