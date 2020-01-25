Produto = require('./ModeloProdutos');


//BUSCAR PRODUTOS
exports.index = function (req, res) {
    Produto.get(function (err, produtos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: produtos
        });
    });
};

//CRIAR PRODUTOS
exports.new = function (req, res) {
    var produtos = new Produto();
    produtos.produto = req.body.produto ? req.body.produto : produtos.produto;
    produtos.tamanho= req.body.tamanho;
    produtos.cores= req.body.cores;
    produtos.unidades = req.body.unidades;

    produtos.save(function (err) {
      
res.json({
            message: 'Produto Criado!!',
            data: produtos
        });
    });
};


exports.update = function (req, res) {

    Produto.findOneAndUpdate({"_id" : req.params.id}, {"unidades" : 89}, (err, resultado_update) => {

        if(err){
        res.status(400).json(err);
        }
        res.json("SUCESSO");
    });

};


exports.delete = (req, res) => {

    Produto.findByIdAndRemove(req.params.id).then(resposta => {

        if(!resposta){
        //com sucesso

    }
    res.send({message: "produto apagado com sucesso"});
}).catch(err => {
        if(err.kind == 'ObjectId' || err.name == 'NotFound'){

        return res.status(404).send({message: "produto não encontrado"});
        }
        return res.status(500).send({message: "Nao foi possivel apagar o produto"});

    });

};