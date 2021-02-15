import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Location')

export class Location {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    latitude: number;

    @Column()
    longitude:number;

}