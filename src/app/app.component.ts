import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { SeparadorComponent } from './separador/separador.component';
import { ContatoComponent } from './contato/contato.component';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}
import output from './output.json';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwyz';
  contatos: Contato[] = output;

  filtrarContatoPorLetraInicial(letra: string): Contato[] {
    return this.contatos.filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
