import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
