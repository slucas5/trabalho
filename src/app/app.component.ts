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
    $.get('https://vgdwz4-3000.csb.app:3000', function (resultado) {
      console.log(resultado);
    });
  }
  EnviarDados(titulo: string, conteudo: string) {
    var json = {
      titulo: titulo,
      conteudo: conteudo,
    };

    $.post('https://vgdwz4-3000.csb.app:3000/dado', json, function (msg) {
      console.log(msg);
    });
  }
  valor = ' ';
  AlterarCampo(valorCaixa: string) {
    this.valor = valorCaixa;
  }
  Clicando() {
    $.get('https://vgdwz4-3000.csb.app:3000/tudo', (resultado) => {
      this.valor = JSON.stringify(resultado);
    });
  }
}
