import React from 'react';

class Content extends React.Component {
  render() {
    const conteudos = [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido'
        },
        {
          conteudo: 'Composicao de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composicao de Estados',
          bloco: 12,
          status: 'Aprenderei'
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei'
        },
      ];
    return conteudos.map((element) => {
      const texto =  `O conteúdo é:  \n '${element.conteudo}',

      Status: \n  '${element.status}',

     Bloco:  \n  '${element.bloco}'.  `;
     return texto;
    })
  }
}

export default Content