import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity()
export class Timesheets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  funcionario_id: string;

  @Column('date')
  data: Date;

  @Column({nullable: true})
  entrada: Date;

  @Column({nullable: true})
  saida_almoco: Date;

  @Column({nullable: true})
  retorno_almoco: Date;

  @Column({nullable: true})
  saida: Date;

  @Column('boolean', { default: false })
  status: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  updateStatus() {
    if (this.entrada && this.saida_almoco && this.retorno_almoco && this.saida) {
      const horasTrabalhadas =
        (this.saida_almoco.getTime() - this.entrada.getTime()) +
        (this.saida.getTime() - this.retorno_almoco.getTime());
      if (horasTrabalhadas > 8 * 60 * 60 * 1000) {
        this.status = true;
      } else {
        this.status = false;
      }
    } else {
      this.status = false;
    }
  }
}