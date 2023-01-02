import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
  
    const pokemons = data.results.map(({name, url}) => ({
        name,
        no: +url.split('/')[url.split('/').length - 2],
    }))

    return pokemons; 
  }
}
