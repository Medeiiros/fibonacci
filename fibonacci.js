// Função para verificar se um número está na sequência de Fibonacci
function isFibonacci(num) {
  let a = 0
  let b = 1
  while (b <= num) {
    if (b === num) {
      return true
    }
    let temp = a + b
    a = b
    b = temp
  }
  return false
}

// Função principal
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  readline.question(
    "Informe um número para verificar se está na sequência de Fibonacci: ",
    (num) => {
      num = parseInt(num)

      if (isNaN(num)) {
        console.log("Por favor, insira um número válido.")
      } else {
        if (isFibonacci(num)) {
          console.log(`${num} está na sequência de Fibonacci.`)
        } else {
          console.log(`${num} não está na sequência de Fibonacci.`)
        }
      }

      readline.close()
    }
  )
}

// Chamada da função principal
main()

/*
Para usar este programa:

- Copie o código acima e cole em um arquivo chamado fibonacci.js.
- Abra um terminal e navegue até o diretório onde você salvou o arquivo fibonacci.js.
- Execute o programa digitando node fibonacci.js.
- O programa solicitará que você insira um número. Após inserir o número, pressione Enter.
- O programa informará se o número está na sequência de Fibonacci ou não.
*/
