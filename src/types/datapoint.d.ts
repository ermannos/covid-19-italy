interface DataPoint {
  data: string;
  stato: string;
  codiceRegione: number;
  denominazioneRegione: string;
  lat: number;
  long: number;
  ricoveratiConSintomi: number;
  terapiaIntensiva: number;
  totaleOspedalizzati: number;
  isolamentoDomiciliare: number;
  totalePositivi: number;
  variazioneTotalePositivi: number;
  nuoviPositivi: number;
  dimessiGuariti: number;
  deceduti: number;
  decedutiTotali: number;
  casiDaSospettoDiagnostico: number;
  casiDaScreening: number;
  totaleCasi: number;
  tamponi: number;
  tamponiTotali: number;
  casiTestati: number;
  positiviTamponi: number;
  note: string;
}

export default DataPoint;
