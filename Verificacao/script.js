// Defina a função que deseja chamar
function minhaFuncao() {
    alert("Você clicou no botão!");
}

// Selecione o botão HTML pelo ID
var botao = document.getElementById("meuBotao");

// Adicione um evento de clique ao botão que chama a função
botao.onclick = function() {
    minhaFuncao();
};



const inputNome = (document.getElementsByName("nomeProd")).value;
const inputValorC = (document.getElementsByName("valorCProd")).value;
const inputValorV = (document.getElementsByName("valorVProd")).valeu;



const mongoose = require('mongoose');

// Conecte-se ao banco de dados
mongoose.connect('mongodb://localhost/seubancodedados', { useNewUrlParser: true, useUnifiedTopology: true });

// Defina um modelo (esquema) para seus documentos
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  valorC: Number,
  valorV: Number
});

// Crie um modelo com o esquema
const User = mongoose.model('User', userSchema);

// Crie um novo documento (registro)
const newUser = new User({
  name: inputNome,
  valorC: inputValorC,
  valorV: inputValorV
});

// Salve o novo documento no banco de dados
newUser.save((err) => {
  if (err) {
    console.error('Erro ao salvar o usuário:', err);
  } else {
    console.log('Usuário salvo com sucesso.');
  }
});