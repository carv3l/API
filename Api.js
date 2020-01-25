let express = require('express')
let rotasapi = require("./api-rotas")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var porta = 8080;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://root:poiou123@api-s0wja.gcp.mongodb.net/Produtos?w=majority');
mongoose.connection.once('open',()=>{

    console.log("Ligação efetuada com Sucesso");


});

app.get('/',(req,res) => res.sendfile('Interface.html'));

app.use('/api', rotasapi)
app.listen(porta);
