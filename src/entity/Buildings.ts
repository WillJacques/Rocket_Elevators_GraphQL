import { BaseEntity, Column, Index, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Batteries } from './Batteries';
import { Customers } from './Customers';
import { Building_details } from './Building_details';


@Index("index_buildings_on_address_id", ["address_id"], {})
@Index("index_buildings_on_customer_id", ["customer_id"], {})
@ObjectType()
@Entity('buildings', { schema: 'Rocket_app_development' })
export class Buildings extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Field()
    @Column()
    address_of_the_building: string;
    
    @Field()
    @Column()
    full_name_of_the_building_administrator: string;

    @Field()
    @Column()
    email_of_the_administrator_of_the_building: string;

    @Field()
    @Column()
    phone_number_of_the_building_administrator: string;

    @Field()
    @Column()
    full_name_of_the_technical_contact_for_the_building: string;

    @Field()
    @Column()
    technical_contact_email_for_the_building: string;

    @Field()
    @Column()
    technical_contact_phone_for_the_building: string;

    @Field()
    @Column()
    created_at: Date;

    @Field()
    @Column()
    updated_at: Date;

    @Field(() => ID)
    @Column()
    address_id: number;

    @Field(() => ID)
    @Column()
    customer_id: number;

    @Field(() => Customers)
    @ManyToOne(() => Customers, customer => customer.buildings)
    @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
    customer: Customers;

    @Field(() => Building_details)
    @OneToOne(() => Building_details, Building_details => Building_details.building)
    building_details: Building_details;

    @Field(() => [Batteries])
    @OneToMany(() => Batteries, batteries => batteries.building)
    batteries: Batteries[];
}