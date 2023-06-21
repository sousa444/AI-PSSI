let HT, VH, PD, SB, TD, SL
HT = Number(prompt("Horas trabalhadas: " ))
VH = Number(prompt("Valor das horas trabalhadas: "  ))
PD = Number(prompt("Percentual de desconto: " ))

SB = HT * VH
TD = (PD/100) * SB
SL = SB - TD

alert("Horas trabalhadas:" + HT +
"\nSalário bruto: R$ " + SB.toFixed(2) +
"\nDesconto: R$ " + TD.toFixed(2) +
"\nSalário líquido: R$ " + SL.toFixed(2))


