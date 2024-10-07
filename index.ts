interface Smartphone {
  credito: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;

  constructor(_nome: string, _cognome: string, _credito: number, _numeroChiamate: number) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
  }
  ricarica(ricarica: number): void {
    //void perché non deve restituire nulla
    this.credito += ricarica;
    console.log(`credito residuo: ${this.credito}`);
  }
  chiamata(minuti: number) {
    (this.credito = minuti * 0), 20;
    console.log(`credito residuo: ${this.credito}`);
  }
  chiama404() {
    return this.credito;
  }
  getNumeroChiamata() {
    return this.numeroChiamate;
  }
  azzeraChiamate() {
    return (this.numeroChiamate = 0);
  }
  creditonegativo() {
    if (this.credito > 0) {
      console.log("puoi effettuare la chiamata");
    } else {
      console.log("non puoi effettuare la chiamata");
    }
  }
}
