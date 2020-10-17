import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Empreendedor from './Empreendedor';

@Entity('images')
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Empreendedor, empreendedor => empreendedor.images) 
    @JoinColumn({name: 'empreendedor_id'})
    empreendedor: Empreendedor;
}