var mongoose = require('mongoose');

var SchemaProdutos = mongoose.Schema({

produto:    { 
    type:String,
    required:true

},
tamanho:    {
    type:String,
    required:true
},
cores:{
    type:String,
    required:true
},
unidades:{
    type:String
}
});

var Produto = module.exports = mongoose.model('produtos',SchemaProdutos);

module.exports.get = function (callback, limit){
    Produto.find(callback).limit(limit);
}