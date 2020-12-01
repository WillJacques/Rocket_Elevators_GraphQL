import { Field, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
​
@ObjectType()
@Entity('quotes', { schema: 'Rocket_app_development' })
export class Quotes extends BaseEntity {
    @Field( () => Int)
    @PrimaryGeneratedColumn()
    id: number
​
    @Field()
    @Column()
    building_type: string
​
    @Field( () => Int )
    @Column()
    no_of_appartments: number
​
    @Field( () => Int )
    @Column()
    no_of_floors: number
​
    @Field( () => Int )
    @Column()
    no_of_basements: number
​
    @Field( () => Int )
    @Column()
    no_of_elevators_cages: number
​
    @Field( () => Int )
    @Column()
    no_of_parking_spaces: number
​
    @Field( () => Int )
    @Column()
    no_of_tenant_companies: number
​
    @Field( () => Int )
    @Column()
    no_of_distinct_businesses: number
​
    @Field( () => Int )
    @Column()
    max_occupants_per_floors: number
​
    @Field()
    @Column()
    created_at: Date
​
    @Field( () => Int)
    @Column()
    no_of_elevators: number
​
    @Field()
    @Column()
    product_grade: string
​
    @Field( () => Int)
    @Column()
    elevator_cost: number
​
    @Field( () => Int)
    @Column()
    installation_cost: number
​
    @Field( () => Int)
    @Column()
    total_cost: number
​
    @Field( () => Int)
    @Column()
    no_of_daily_hours_of_activity: number
​
    @Field( () => Int)
    @Column('bigint', { name: 'address_id', nullable: true })
    customer_id: number
​
    @Field()
    @Column()
    company_name: string
​
    @Field()
    @Column()
    contact_email: string
​
    @Field()
    @Column()
    full_name: string
​
    @Field()
    @Column()
    email: string
​
    @Field( () => Int)
    @Column()
    phone: number
}