import {Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";
import {ApiTags} from "@nestjs/swagger";

@Entity('files')
export class FileEntity {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private filename: string;

    @Column()
    private originalName: string;

    @Column()
    private size: number;

    @Column()
    private mimetype: string;

    @ManyToOne(() => UserEntity, (user: UserEntity) => user.getFiles)

    @DeleteDateColumn()
    deletedAt?: Date;

    private user: UserEntity;

    public getUser(): UserEntity {
        return this.user;
    }
}
