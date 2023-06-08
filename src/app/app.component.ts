import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes-master';
  Conectar() {
    $.get('http://localhost:3000', function (resultado) {
      console.log(resultado);
    });
  }
  EnviarDados(title: string, body: string) {
    var json = {
      title: title,
      body: body,
    };

    $.post('http://localhost:3000/dado', json, function (msg) {
      console.log(msg);
    });
  }
  valor = ' ';
  AlterarCampo(valorCaixa: string) {
    this.valor = valorCaixa;
  }
  Clicando() {
    $.get('http://localhost:3000/tudo', (resultado) => {
      this.valor = JSON.stringify(resultado);
    });
  }
}
