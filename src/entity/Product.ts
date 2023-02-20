import {

    Column,

    Entity,

    PrimaryGeneratedColumn,

} from "typeorm";



@Entity()

export class Product {

    @PrimaryGeneratedColumn()

    public readonly id: number;



    @Column({default: 0})

    public price: number;



    @Column({ type: "varchar" })

    public name: string;



    @Column({ type: "varchar" , default : '' })

    public author: string;



    @Column({ type: "varchar" , default : '' })

    public avatar: string;



}
