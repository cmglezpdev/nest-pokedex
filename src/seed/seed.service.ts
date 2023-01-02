import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios, { AxiosInstance } from 'axios';

import { PokeResponse } from './interfaces';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly axiosAdapter: AxiosAdapter
  ){}

  async executeSeed() {
    const data = await this.axiosAdapter.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
  
    const pokemons = data.results.map(({name, url}) => ({
        name,
        no: +url.split('/')[url.split('/').length - 2],
    }))

    await this.pokemonModel.deleteMany();
    await this.pokemonModel.insertMany(pokemons);
    return pokemons; 
  }
}
