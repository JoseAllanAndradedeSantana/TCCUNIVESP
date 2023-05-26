const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let DB = {
    unidades:[
        {
            id:1,
            nome: "UBS SANTOS ",
            cidade: "Santos",
            vacina: "Gripe",
            estado: "São Paulo"
        },
        {
            id:2,
            nome: "UBS SÃO VICENTE ",
            cidade: "São Vicente",
            vacina: "Covid-19",
            estado: "São Paulo"
        },
        {
            id:3,
            nome: "UBS PRAIA-GRANDE ",
            cidade: "Praia Grande",
            vacina:"Indisponivel",
            estado: "São Paulo"
        },
        {
            id:3,
            nome: "UBS CUBATÃO ",
            cidade: "Cutabão",
            vacina:"Gripe",
            estado: "São Paulo"
        }

    ],
    doencas:[
        {
            id:1,
            nome:"H1N1",
            sintomas:"febre súbita, tosse(geralmente seca), dor de cabeça, dores musculares e articulares, mal estar , dor de garganta coriza. A tosse pode ser forte e durar duas ou mais semanas."
        }
    ]
}

app.get("/doenca", (req, res) => {
    res.statusCode = 200;
    res.json(DB.doencas);
});

app.get("/doenca/:nome", (req,res) => {
    var doenca = req.params.nome; //DB.unidades.filter
    var unidades = DB.doencas.filter(d => d.nome == doenca);
    if(doenca == undefined) return res.json("vacina indisponivel")
    res.json(unidades);
});

app.get("/ubs", (req, res) => {
    res.statusCode = 200;
    res.json(DB.unidades);
});

app.get("/ubs/:vacina", (req,res) => {
    var doenca = req.params.vacina; //DB.unidades.filter
    var unidades = DB.unidades.filter(d => d.vacina == doenca);
    if(doenca == undefined) return res.json("vacina indisponivel")
    res.json(unidades);
});

app.post("/ubs",(req,res) =>{
    var {nome,cidade,vacina,estado} = req.body;
    DB.unidades.push({
        nome,
        cidade,
        vacina,
        estado
    });
    res.sendStatus(200)

});

app.delete("/ubs/:id",(req,res) => {
    var id = parseInt(req.params.id);
    var index = DB.unidades.findIndex(unidade => unidade.id == id);
    DB.unidades.splice(index,1)
    res.sendStatus(200)


});

app.listen(8181,() => {
    console.log("API TCC RODANDO")
})