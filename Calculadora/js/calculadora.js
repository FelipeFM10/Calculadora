
function calcular(tipo, valor){

        if(tipo === 'acao') {
            if(valor === 'c'){
              //limpar o visor
              document.getElementById('resultado').value = ''
            }
            if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
              document.getElementById('resultado').value += valor
            }
            if(valor === '1'|| valor === '2'|| valor === '3'|| valor === '4'|| valor === '5'|| valor === '6'|| valor === '7'|| valor === '8'|| valor === '9'|| valor === '0'){
              document.getElementById('resultado').value += valor;
            }
          
          if(valor === '='){
            document.getElementById('resultado').value = eval(document.getElementById('resultado').value)
           }
        }
}