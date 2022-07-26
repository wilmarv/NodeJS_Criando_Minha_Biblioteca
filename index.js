import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho!'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro));
}

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo,encoding,(erro,texto)=> {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto))
//     });
// }

pegaArquivo('./arquivos/texto1.md');