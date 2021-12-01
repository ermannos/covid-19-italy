interface StatoVaccinazioni {
  index: number;
  area: string;
  dosiSomministrate: number;
  dosiConsegnate: number;
  percentualeSomministrazione: number;
  ultimoAggiornamento: string;
}

interface Somministrazione {
  index: number;
  dataSomministrazione: string;
  area: string;
  totale: number;
  sessoMaschile: number;
  sessoFemminile: number;
  primaDose: number;
  secondaDose: number;
  doseBooster: number;
}

interface Consegna {
  index: number;
  area: string;
  fornitore: string;
  numeroDosi: number;
  dataConsegna: string;
}

export { StatoVaccinazioni, Somministrazione, Consegna };
