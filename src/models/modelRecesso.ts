
import { Entity, PrimaryColumn, Column } from 'typeorm';
import {v4 as uuid} from "uuid"

@Entity("recesso")
export default class {
  // chave primaria
  @PrimaryColumn()
  id_recesso: string

  // atributos
  @Column({nullable: false})
  descricao_recesso: string

  @Column({nullable: false})
  data_recesso: Date

  constructor(){
    this.id_recesso = uuid()
  }
}

