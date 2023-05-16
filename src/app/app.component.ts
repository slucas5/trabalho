import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes-frontend';
  Conectar() {
    $.get('https://localhost:3000', function (resultado) {
      console.log(resultado);
    });
  }
  EnviarDados(titulo: string, conteudo: string) {
    var json = {
      titulo: titulo,
      conteudo: conteudo,
    };

    $.post('https://localhost:3000/dado', json, function (msg) {
      console.log(msg);
    });
  }
  valor = ' ';
  AlterarCampo(valorCaixa: string) {
    this.valor = valorCaixa;
  }
  Clicando() {
    $.get('https://localhost:3000/tudo', (resultado) => {
      this.valor = JSON.stringify(resultado);
    });
  }
}
