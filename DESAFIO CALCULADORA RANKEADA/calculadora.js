function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
      } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
      } else if (vitorias > 20 && vitorias <= 50) {
        nivel = 'Prata';
      } else if (vitorias > 50 && vitorias <= 80) {
        nivel = 'Ouro';
      } else if (vitorias > 80 && vitorias <= 90) {
        nivel = 'Diamante';
      } else if (vitorias > 90 && vitorias <= 100) {
        nivel = 'Lendário';
      } else {
        nivel = 'Imortal';
      }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
    }

    const vitorias = 75; // Substitua pelo número de vitórias do jogador
    const derrotas = 25; // Substitua pelo número de derrotas do jogador

    const resultado = calcularNivel(vitorias, derrotas);
    console.log(resultado);
    

