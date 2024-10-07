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
    if (this.credito - minuti * 0.2 < 0) {
      console.log("impossibile effettuare la chiamata");
    }
    this.credito -= minuti * 0.2;
    this.numeroChiamate += 1;
  }
  chiama404() {
    return this.credito;
  }
  getNumeroChiamata() {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}
