import { BaseEntity, Column, Index, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Batteries } from './Batteries';
import { Elevators } from './Elevators';
import { Customers } from './Customers';

@Index("index_columns_on_battery_id", ["battery_id"], {})
@Index("index_columns_on_customer_id", ["customer_id"], {})
@ObjectType()
@Entity('columns', { schema: 'wj' })
export class Columns extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Field()
    @Column()
    type_of_building: string;

    @Field()
    @Column()
    number_of_floors_served: string;
    
    @Field()
    @Column()
    status: string;

    @Field()
    @Column()
    information: string;

    @Field()
    @Column()
    notes: string;

    @Field()
    @Column()
    created_at: Date;

    @Field()
    @Column()
    updated_at: Date;

    @Field(() => ID)
    @Column()
    battery_id: number;

    @Field(() => ID)
    @Column()
    customer_id: number;

    @Field(() => Batteries)
    @ManyToOne(() => Batteries, battery => battery.columns)
    @JoinColumn({ name: 'battery_id', referencedColumnName: 'id' })
    battery: Batteries;

    @Field(() => [Elevators])
    @OneToMany(() => Elevators, elevators => elevators.column)
    elevators: Elevators[];

    @Field(() => Customers)
    @ManyToOne(() => Customers, customer => customer.columns)
    @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
    customer: Customers;
}