import React from 'react';

class Prop extends React.Component {
    render () {
      const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.Pokepedia
        return (
      <div className='caixa'>
        <h1>Nome: {name}</h1>
        <img src= {image} alt = {name}></img>
        <h2>Tipo de poderzin: {type}</h2>
        <p>O peso desse pokemos é equivalente a { value }{ measurementUnit }s</p>
      </div>

)
    }
}

export default Prop;