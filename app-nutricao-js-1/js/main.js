var titulo = document.querySelector('#brand');
console.log(titulo)
var nomeNutricionista = titulo.querySelector('span');
console.log(nomeNutricionista)
nomeNutricionista.textContent = 'André Oliveira'; //nome do titulo da pagina


//formulario----------------
var campos = [
    document.querySelector('#nome'),
    document.querySelector('#data'),
    document.querySelector('#peso'),
    document.querySelector('#altura')
];
console.log(campos);
//===================

//adicionar na tabela
var tabela = document.querySelector('table tbody');


document.querySelector('form').addEventListener('submit',
    function (evento) {
        evento.preventDefault();
        var tr = document.createElement('tr');
        campos.forEach(function(campo) {
            var td = document.createElement('td');       //CALCULO IMC
            td.textContent = campo.value;
            tr.appendChild(td);
        });
        var td = document.createElement('td');
        td.textContent = (campos[2].value / 
            (campos[3].value * campos[3].value)).toFixed(2);
        tr.appendChild(td);
        tabela.appendChild(tr);

        this.reset();                //limpar os campos do formulario
        campos[0].focus();          //deixar o mouse no primeiro campo do formulario
});
//=====================

