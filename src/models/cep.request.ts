export interface Cep {
  zipCode: string
  city: string
  district: string
  state: string
  ibge: string
  provider: number
  location: Location
}

export interface Location {
  lat: number
  lon: number
}