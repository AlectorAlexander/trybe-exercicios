const service = require('./service');
jest.mock("./service");


    
 test('numero aleatorio', () => {
    service.numeroAleatorio = jest.fn();
    service.numeroAleatorio()
    expect(service.numeroAleatorio).toHaveBeenCalled();
    service.numeroAleatorio = jest.fn().mockReturnValue(10);

    service.numeroAleatorio()

    expect(service.numeroAleatorio).toHaveBeenCalled();
    expect(service.numeroAleatorio()).toBe(10);

    service.numeroAleatorio.mockClear()
    service.numeroAleatorio.mockImplementation((a, b) => a / b);

    service.numeroAleatorio(4, 2)

    expect(service.numeroAleatorio).toHaveBeenCalled();
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.numeroAleatorio(4, 2)).toBe(2);

    service.numeroAleatorio.mockClear()

    service.numeroAleatorio.mockImplementation((a, b, c) => a * b * c);
    service.numeroAleatorio(4, 2, 2)
    expect(service.numeroAleatorio).toHaveBeenCalled();
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.numeroAleatorio(4, 2, 2)).toBe(16);

    service.numeroAleatorio.mockClear()

    service.numeroAleatorio.mockImplementation((a) => a * 2);

    service.numeroAleatorio(4)
    expect(service.numeroAleatorio).toHaveBeenCalled();
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.numeroAleatorio(4)).toBe(8);
})

test('Testa tudo de novo', () => { 
    const caixaAlta = jest.spyOn(service, 'caixaAlta');
    service.firsto = jest.fn();
    service.amorAiLoveU = jest.fn();

    caixaAlta.mockImplementation((param) => param.toLowerCase())
    service.firsto.mockImplementation((param) => param[param.length - 1])
    service.amorAiLoveU.mockImplementation((param1, param2, param3) => param1 + ' ' + param2 + ' ' + param3)

service.caixaAlta('PARAM');
service.firsto('PARAM');
service.amorAiLoveU('PARAM', 'PARAM', 'PARAM');

expect(service.caixaAlta).toHaveBeenCalled();
expect(service.caixaAlta('PARAM')).toBe('param');

expect(service.firsto).toHaveBeenCalled();
expect(service.firsto('PARAM')).toBe('M');

expect(service.amorAiLoveU).toHaveBeenCalled();
expect(service.amorAiLoveU('AMOR,', 'I', 'LOVE U')).toBe('AMOR, I LOVE U');

service.caixaAlta.mockReset();
caixaAlta('param')

expect(service.caixaAlta('param')).toBe('PARAM');


 })