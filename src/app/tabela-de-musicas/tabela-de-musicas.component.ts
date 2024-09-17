import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../musica.service';
import { musica } from '../musicas';

@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrls: ['./tabela-de-musicas.component.css']
})
export class TabelaDeMusicasComponent {
  musicas: musica[] = [];

  constructor(private service: MusicasService){}

  ngOnInit(){
    this.loadMusicas()
  }
  loadMusicas() {
    this.service.getMusicas().subscribe ({ 
      next: data => this.musicas = data
    })
    }

    delete(musicas:musica){ 
      this.service.delete(musicas).subscribe({
        next:() => this.loadMusicas()
      })
    }
}