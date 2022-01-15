//referência: Consegui resolver este exercício graças a um post no Slack, do aluno Mayu Satori - Turma 13 - Tribo B
let fatorial = (numero) => (numero === 1) ? 1  : numero *  fatorial(numero-1)
console.log(fatorial(5))