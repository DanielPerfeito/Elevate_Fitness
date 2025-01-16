const path = require('path');

module.exports = {
  entry: './src/js/index.js', // Arquivo de entrada principal
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Pasta onde o arquivo será salvo
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica a regra a arquivos .js
        exclude: /node_modules/, // Ignora a pasta node_modules
        use: {
          loader: 'babel-loader', // Usa Babel para processar os arquivos
        },
      },
    ],
  },
  mode: 'development', // Modo de desenvolvimento
};