import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FileEntity} from "../../files/entities/file.entity";
import {ApiTags} from "@nestjs/swagger";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private email: string;

    @Column()
    private password: string;

    @Column()
    private fullName: string;

    @OneToMany(() => FileEntity, (file: FileEntity) => file.getUser)

    private files: FileEntity[];

    public getFiles(): FileEntity[] {
        return this.files;
    }
}
