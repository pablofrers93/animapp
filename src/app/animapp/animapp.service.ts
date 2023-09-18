import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { IDatos, IAnimapp } from './interfaces/animapp';

@Injectable({
  providedIn: 'root'
})
export class AnimappService {

  resultados : IDatos[] = [];

  apiKey: string = 'UEzq0L3tYfNfFSnZtx7SvvfKJdeGN2IB';

  constructor(private http: HttpClient) { }

  buscarGifs(query: string){
    this.http.get<IAnimapp>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
             .subscribe(resp => {
              this.resultados = resp.data;
             })
  }
}
