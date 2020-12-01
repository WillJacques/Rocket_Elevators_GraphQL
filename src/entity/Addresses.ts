import { Field, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
​
​
@ObjectType()
@Entity('addresses', { schema: 'Rocket_app_development' })
export class Addresses extends BaseEntity {
    @Field( () => Int)
    @PrimaryGeneratedColumn()
    id: number
​
    @Field()
    @Column()
    type_of_address: string
​
    @Field()
    @Column()
    status: string
​
    @Field()
    @Column()
    entity: string
​
    @Field()
    @Column()
    number_and_street: string
​
    @Field()
    @Column()
    suite_or_apartment: string
​
    @Field()
    @Column()
    city: string
​
    @Field()
    @Column()
    postal_code: string
​
    @Field()
    @Column()
    country: string
​
    @Field()
    @Column()
    notes: string
​
    @Field( () => Int)
    @Column()
    latitude: number
​
    @Field( () => Int)
    @Column()
    longitude: number
}