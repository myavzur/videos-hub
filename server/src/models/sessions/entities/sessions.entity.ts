import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm';

@Entity({name: 'sessions'})
export class Session {
  @PrimaryColumn({ type: 'varchar', collation: 'default' })
  sid: string;

  @Column('json')
  sess: string;

  @Column('timestamp')
  expire: number;
}