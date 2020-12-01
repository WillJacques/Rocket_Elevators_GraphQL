import { Field, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Batteries } from './Batteries';
​
@ObjectType()
@Entity('employees', { schema: 'Rocket_app_development' })
export class Employees extends BaseEntity {
    @Field( () => Int)
    @PrimaryGeneratedColumn()
    id: number
​
    @Field()
    @Column()
    first_name: string
​
    @Field()
    @Column()
    last_name: string
​
    @Field()
    @Column()
    title: string
​
    @Field()
    @Column()
    email: string
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
    @Column('bigint', { name: 'admin_user_id', nullable: true })
    admin_user_id: string
​
    @Field( () => Int )
    @Column()
    phone_number: string

    @Field(() => [Batteries])
    @OneToMany(() => Batteries, batteries => batteries.employee)
    batteries: Batteries[];
}