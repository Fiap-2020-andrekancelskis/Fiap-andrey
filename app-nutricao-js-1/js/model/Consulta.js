//clase com construtor
class Consulta {
    constructor(nome, data, peso, altura) {
        this._nome = nome;
        this._data = new Date(data.getTime());
        //this._data = new Date (this.inputData.value.replace(/ - /g, ','));
        this._peso = peso;
        this._altura = altura;
        Object.freeze(this); // nao consegue modificar o objeto
    }
    get nome() {
        return this._altura;
    }
    get date() {
        return this._data;
    }
    get peso() {
        return this._peso;
    }
    get altura() {
        return this._altura;
    }
    get imc() {
        return (this._peso / (this._altura * this._altura));
    }
}