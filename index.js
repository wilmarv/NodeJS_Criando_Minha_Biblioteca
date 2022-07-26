import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });
    }
    return arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, erro.message));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto1.md');