const student={
    name:"Gabriel Henrique",
    age:18,
    cpf:"541.487.818-21",
    class:"Java Script",
    scholarshipHolder: true,
    TelephoneNumbers:['11-94230-2006', '21-9238-9198'],
    adress:[{
        street:"Av Interlagos",
        city:"Sao Paulo",
        country:"Brazil"
    },
    {
    street:"Bronks",
    city:"New York",
    country:"USA"
}]
}


function ligarParaTelefones(telefone1, telefone2){
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

ligarParaTelefones(...student.TelephoneNumbers)