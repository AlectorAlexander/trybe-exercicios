const { expect } = require('chai');
const sinon = require('sinon')
const { PsOrNg, writerFile } = require('../index')


describe('testa se retorna os valores corretos', function () {
    it('se retorna uma string', () => {
        const result = PsOrNg(2);

        expect(result).to.be.a('string')
    });
    it('se o número for maior que 0, retorna "positivo"', () => {
        const result = PsOrNg(2);

        expect(result).to.be.equals('positivo')
    });
    it('se o número for menor que 0, retorna "negativo"', () => {
        const result = PsOrNg(-2);

        expect(result).to.be.equals('negativo')
    });
    it('se o número for igual a 0, retorna "neutro"', () => {
        const result = PsOrNg(0);

        expect(result).to.be.equals('neutro')
    });
    it('se o número não for número', () => {
        

        expect(() => PsOrNg('blabla')).to.throw()
    });
    
})

describe('testa se escreve arquivos', function () {
    this.beforeEach(() => {
        sinon.stub(fs, 'writeFile').returns('./meuTexto.txt', 'Meu textão');
    })
    it('se retorna uma string', async () => {
        const result = await writerFile('./meuTexto.txt', 'Meu textão');

        expect(result).to.be.a('string')
    });
    it('se é ok', async () => {
        const result = writerFile('./meuTexto.txt', 'Meu textão');

        expect(result).to.be.equals('ok')
    });
})
