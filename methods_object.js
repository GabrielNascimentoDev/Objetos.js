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

const objectKeys = Object.keys(student)
//console.log(objectKeys);

const objectValues = Object.values(student)
//console.log(objectValues)

const objectEntries = Object.entries(student)


if (!objectKeys.includes('Birthday')){
    console.error("É necessario que a chave exista")
}

for (let keys in student){
    const type = typeof student[keys]
    if (type !== 'object' && type !== 'function'){
        console.log(student[keys]);
    }
}
