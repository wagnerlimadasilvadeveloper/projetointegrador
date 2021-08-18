const { uuid } = require("uuidv4");
let listaDeProdutos = [
  {
    id: uuid(),
    titulo:"O monge e o executivo",
    tipo: "auto-ajuda",
    ano: 2000,
    estante:"Sdfff",
    peso:"100gr",
    isbn:"hsadfad",
    sinopse:"sggdghdgdgdhjdgdg",
    idioma:"português",
    cadastradoEm:"01/01/2022",
    descricao:"dgsdgjhdgjhdjhdjsdf",
    preco:19,90,
    imagem:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcandeia.vteximg.com.br%2Farquivos%2Fids%2F201896-1000-1000%2F10643.png%3Fv%3D636340875181100000&imgrefurl=https%3A%2F%2Fwww.candeia.com%2Fmonge-e-o-executivo-o%2Fp&tbnid=AOPALVv3Ysn48M&vet=12ahUKEwjS49S7rrnyAhW8tJUCHT3NAA8QMygGegUIARC1AQ..i&docid=rsNhEnQkh0I9tM&w=1000&h=1000&q=o%20monge%20e%20o%20executivo%20png&ved=2ahUKEwjS49S7rrnyAhW8tJUCHT3NAA8QMygGegUIARC1AQ",
  },
];

module.exports = {listaDeProdutos};