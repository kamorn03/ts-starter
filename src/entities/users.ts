import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ name: 'name', nullable: true ,type: 'longtext'  })
    name: String

}

