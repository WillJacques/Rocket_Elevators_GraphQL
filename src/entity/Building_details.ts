import { Field, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { Buildings } from './Buildings';

​
@ObjectType()
@Entity('building_details', { schema: 'Rocket_app_development' })
export class Building_details extends BaseEntity {
    @Field( () => Int)
    @PrimaryGeneratedColumn()
    id: number
​
    @Field()
    @Column('varchar', { name: 'information_key', nullable: true, length: 255 })
    information_key: string
​
    @Field()
    @Column('varchar', { name: 'value', nullable: true, length: 255 })
    value: string
​
    @Field()
    @Column()
    created_at: Date
​
    @Field()
    @Column()
    updated_at: Date
​
    @Field( () => Int )
    @Column('bigint', { name: 'building_id', nullable: true })
    building_id: number

    @Field( () => Buildings )
    @OneToOne(() => Buildings, building => building.building_details)
    @JoinColumn({ name: 'building_id', referencedColumnName: 'id' })
    building: Buildings;
​
    @Field( () => Int )
    @Column('bigint', { name: 'customer_id', nullable: true })
    customer_id: number
}