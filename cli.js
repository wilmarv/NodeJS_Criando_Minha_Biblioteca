import PegaArquivo from './index.js';

async function processarTexto(caminhoDeArquivo) {
    const resultado = await PegaArquivo(caminho[2]);
    console.log(resultado);
}

const caminho = process.argv;
processarTexto(caminho);