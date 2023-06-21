// let n, quadrado, raiz
// n = Number(prompt(&quot;Digite um número: &quot;))
// quadrado = n**2
// raiz = Math.sqrt(n)
// alert(&quot;Valor final: &quot; + quadrado, raiz)

let n1, n2, media

//n1 = Number(prompt("Digite a primeira nota: "))
//n2 = Number(prompt("Digite a segunda nota: "))
//media = (n1 + n2) / 2
 //alert("Sua média é " + media)

// let c1, c2, c3, c4, c5, valorTotal
// c1 = Number(prompt(Quanto ganhou no primeiro corre?))
// c2 = Number(prompt(Quanto ganhou no segundo corre?))
// c3 = Number(prompt(Quanto ganhou no terceiro corre?))
// c4 = Number(prompt(Quanto ganhou no quarto corre?))
// c5 = Number(prompt(Quanto ganhou no quinto corre?))
// valorTotal = c1 + c2 + c3 + c4 + c5
// alert(Lucro diário: + valorTotal)

let c1, c2, c3, c4, c5, valorTotal, desconto
c1 = Number(prompt("Quanto ganhou no primeiro corre?" ))
c2 = Number(prompt("Quanto ganhou no segundo corre?" ))
c3 = Number(prompt("Quanto ganhou no terceiro corre?" ))
c4 = Number(prompt("Quanto ganhou no quarto corre?" ))
c5 = Number(prompt("Quanto ganhou no quinto corre?" ))

valorTotal = c1 + c2 + c3 + c4 + c5

desconto = 0.25

 let valorLiquido =  valorTotal *.0.75

 alert("Lucro diário: " + valorLiquido)

let salario = valorLiquido * 20

alert("estimativa de salario: " + salario)
