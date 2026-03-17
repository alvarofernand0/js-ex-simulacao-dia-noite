export function obterHoraAtual() {
    return new Date().getHours();
}

console.log('Hora atual:', obterHoraAtual());

export function determinarPeriodo(hora) {
    if(hora >= 0 && hora < 6) {
        return 'madrugada';
    }

    else if(hora >= 6 && hora < 12) {
        return 'manha';
    }

    else if(hora >= 12 && hora < 16) {
        return 'meiodia';
    }

    else if(hora >= 16 && hora < 18) {
        return 'tarde';
    }

    else if(hora >= 18 && hora < 24) {
        return 'noite';
    }
}

console.log('Periodo do dia:', determinarPeriodo(3));
console.log('Periodo do dia:', determinarPeriodo(9));
console.log('Periodo do dia:', determinarPeriodo(14));
console.log('Periodo do dia:', determinarPeriodo(17));
console.log('Periodo do dia:', determinarPeriodo(21));

export function calcularPosicaoAstro(hora) {
    
    if(hora < 6 ) {
        return 0;
    }
    
    else if(hora > 18) {
        return 100;
    }
    
    else {
        return 50;
    }
}

console.log(calcularPosicaoAstro(6));
console.log(calcularPosicaoAstro(12));
console.log(calcularPosicaoAstro(18));
console.log(calcularPosicaoAstro(3));
console.log(calcularPosicaoAstro(21));

export function atualizarInterface(periodo, posicaoAstro) {
    document.getElementById('ceu').className = 'periodo-' + periodo;
    document.getElementById('astro').style.left = posicaoAstro + '%';
    document.getElementById('relogio').textContent = 'Hora: ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('saudacao').textContent = periodo === 'manha' ? 'Bom dia!' : periodo === 'tarde' || periodo === 'meiodia' ? 'Boa Tarde!' : periodo === 'madrugada' ? 'Boa Madrugada!' : 'Boa noite!';
}

export function atualizarTela() {
    const hora = obterHoraAtual();
    const periodo = determinarPeriodo(hora);
    const posicaoAstro = calcularPosicaoAstro(hora);
    atualizarInterface(periodo, posicaoAstro);
}

atualizarTela();
setInterval(atualizarTela, 1000);
