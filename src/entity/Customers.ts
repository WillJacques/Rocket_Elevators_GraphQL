import { Field, ID, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Buildings } from './Buildings';


@ObjectType()
@Entity('customers', { schema: 'Rocket_app_development' })
export class Customers extends BaseEntity {
    @Field( () => ID)
    @PrimaryGeneratedColumn()
    id: number
​
    @Field()
    @Column()
    customer_creation_date: Date
​
    @Field()
    @Column()
    company_name: string
​
    @Field()
    @Column()
    company_headquarter_address: string
​
    @Field()
    @Column()
    full_name_company_contact: string
​
    @Field()
    @Column()
    company_contact_phone: string
​
    @Field()
    @Column()
    email_company_contact: string
​
    @Field()
    @Column()
    company_description: string
​
    @Field()
    @Column()
    full_name_service_technical_authority: string
​
    @Field()
    @Column()
    technical_authority_phone: string
​
    @Field()
    @Column()
    technical_manager_email: string
​
    @Field()
    @Column()
    created_at: Date
    @Field()
    @Column()
    updated_at: Date
​
    @Field( () => ID)
    @Column('bigint', { name: 'admin_user_id', nullable: true })
    admin_user_id: number
​
    @Field( () => ID)
    @Column('bigint', { name: 'address_id', nullable: true })
    address_id: number
​
    @Field( () => ID)
    @Column('bigint', { name: 'employee_id', nullable: true })
    employee_id: number

    @Field(() => [Buildings])
    @OneToMany(() => Buildings, buildings => buildings.customer)
    buildings: Buildings[];
}