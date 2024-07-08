const carro = {
    marca: "fiat",
    modelo: "Uno",
    ano: 2006,
    cor: "Vermelho"
  }

  console.log("Propriedades iniciais do carro:")
  for (let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
  }

  carro.kambio = "Automatico";
  carro.kmrodados = 200.000;

  console.log("\nPropriedades atualizadas do carro:")
  for (let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
  }