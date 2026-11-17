
const Nodo = require('./Nodo.js');

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.tamanio = 0;
    }

    estaVacia() {
        return this.tamanio === 0;

    }

    agregarAlfinal(dato) {
        const nuevoNodo = new Nodo(dato);
        if (this.estaVacia()) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;

        }
        this.tamanio++;
    }

    agregarAlInicio(dato) {
        const nuevoNodo = new Nodo(dato);
        if (this.estaVacia()) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza = nuevoNodo;

        }
        this.tamanio++;
    }
    recorrer(callback) {
        let actual = this.cabeza;
        while (actual !== null) {
            callback(actual.dato);
            actual = actual.siguiente;
        }
    }


}

module.exports = ListaEnlazada;



