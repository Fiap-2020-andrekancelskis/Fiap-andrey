class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        this._listaConsulta = new ListaConsultas();
    }
    adiciona(evento) {
        evento.preventDefault(); // criar a classe data helper e passar pra ca chamando ela ja formatada
        let consulta = this._criaConsulta();
        this._listaConsulta.adicona(consulta);
        this._limpaFormulario();
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            //new Date(this._inputData.value.split('-'));
            DataHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        );


    }
    _limpaFormulario() {
        this._inputNome.value = "";
        this._inputData.value = "";
        this._inputPeso.value = "";
        this._inputAltura.value = "";
        this._inputNome.focus();
    }
}