import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usu: string;
  public sen: string;
  public saida: string;

  constructor() {}

  public mostra(): void {
    this.saida = 'Usuário: ' + this.usu + 'Senha: ' + this.sen;
  }

}
