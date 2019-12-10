import { Injectable, ComponentFactoryResolver } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class BancodedadosService {

  constructor(private sqlite: SQLite) { }

  public pegaBD() {
    return this.sqlite.create({
      name: 'bancoappvendas.db',
      location: 'default'
    });
  }

  public criarBancoDeDados() {
    return this.pegaBD()
    .then((bd: SQLiteObject) => {
      //Criando Tabela
      this.criarTabela(bd);
    })
    .catch(e => console.log(e));
  }

  private criarTabela(bd: SQLiteObject) {
    bd.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, usuario TEXT, senha TEXT)']
    ])
    .then(() => console.log('Tabela Criada'))
    .catch(e => console.error('Erro ao criar a tabela', e));
  }

}
