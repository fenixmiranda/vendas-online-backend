import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name:'state'})
export class StateEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'uf', nullable: false})
    uf: string;

    @CreateDateColumn({name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({name: 'updated_at' })
    updateAt: Date;
}