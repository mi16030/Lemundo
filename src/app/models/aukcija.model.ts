export class Aukcija {
  constructor(
    public id: number,
    public kategorija: string,
    public ime: string,
    public prodavac: string,
    public brojPonuda: number,
    public aktuelnaPonuda: number,
    public slanje: string,
    public placanje: number,
    public stanje: string,
    public garancija: string,
    public proizvodjac: string,
    public velicina: number,
    public boja: string,
    public opis: string,
    public images: [string]
  ) {}
}
