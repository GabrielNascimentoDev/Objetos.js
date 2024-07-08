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

for (let chave in student){
    const type = typeof student[chave]
    if(type !== 'object' && type!== 'function') {
    const text = `A chave ${chave} tem o valor de ${student[chave]}`
    console.log(student[chave]);
}
}