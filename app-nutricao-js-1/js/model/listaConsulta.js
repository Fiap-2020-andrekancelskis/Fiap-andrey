class ListaConsultas {
    constructor() {
        this._consultas = [];
    }

    adicona(consulta) {
        this._consultas.push(consulta)
    }
    get consulta() {
        return [].concat(this._consultas);
    }
}