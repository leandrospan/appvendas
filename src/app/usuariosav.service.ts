import { Injectable } from '@angular/core';

import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BancodedadosService } from '../app/bancodedados.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosavService {

  constructor(private bdService: BancodedadosService) { }

  public inserir(usuarios: Usuarios) {
    return this.bdService.pegaBD()
    .then((bd: SQLiteObject) => {
      let sql = 'INSERT INTO usuarios (usuario, senha) values (?, ?)';
      let dados = [usuarios.user, usuarios.senh];
      return bd.executeSql(sql, dados)
      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  public atualizar(usuarios: Usuarios) {
    return this.bdService.pegaBD()
    .then((bd: SQLiteObject) => {
      let sql = 'UPDATE usuarios set usuario = ?, senha = ? WHERE id = ?';
      let dados = [usuarios.user, usuarios.senh, usuarios.id];
      return bd.executeSql(sql, dados)
      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.bdService.pegaBD()
    .then((bd: SQLiteObject) => {
      let sql = 'DELETE FROM usuarios WHERE id = ?';
      let dados = [id];
      return bd.executeSql(sql, dados)
      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  public pega(id: number) {
    return this.bdService.pegaBD()
    .then((bd: SQLiteObject) => {
      let sql = 'SELECT * FROM usuarios WHERE id = ?';
      let dados = [id];
      return bd.executeSql(sql, dados)
      .then((dado: any) => {
        
      })
    });
  }

}

export class Usuarios {
  public id: number;
  public user: string;
  public senh: string;
}
