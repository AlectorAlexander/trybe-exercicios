import React from 'react'

class Form extends React.Component {
    render() { 
        return (
        <div id="Formulário">
  

        <form>
            <fieldset className='Nome'>
                <label name='name'>
                    <span> Nome: </span>
                    <input name='name' type='text' maxLength={40} required="required" />
                </label>
                <label name='email'>
                    <span> email: </span>
                    <input name='email' type='text' maxLength={50} required="required" />
                </label>
                <label name='CPF'>
                    <span> CPF: </span>
                    <input name='CPF' type='text' maxLength={11} required="required" />
                </label>
                <label name='Endereço'>
                    <span> Endereço: </span>
                    <textarea className='textArea' name='Endereço' type='text' maxLength={200} required="required" onKeyPress={this.props.something} /> 
                </label>
                <label name='Cidade'>
                    <span> Cidade: </span>
                    <input name='Cidade' type='text' maxLength={28} required="required" />
                </label>
                <div className='radio'>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Apartamento</label>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Casa</label>
                </div>
            </fieldset>
        </form>
        </div>
        )

    }
    }

    export default Form