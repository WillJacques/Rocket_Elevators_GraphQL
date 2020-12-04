import { BaseEntity, Column, Index, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Elevators } from "./Elevators";
import { Customers } from "./Customers";

@Index("index_interventions_on_elevator_id", ["elevator_id"], {})

@ObjectType()
@Entity('interventions', { schema: 'wj' })
export class Interventions extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;
    
    @Field()
    @Column({ name: 'status', nullable: true })
    status: string;

    @Field()
    @Column()
    report: string;

    @Field()
    @Column({ name: 'result', nullable: true })
    result: string;

    @Field()
    @Column()
    created_at: Date;

    @Field()
    @Column()
    updated_at: Date;

    @Field()
    @Column()
    intervention_stop: Date;

    @Field()
    @Column()
    intervention_start: Date;

    @Field(() => ID)
    @Column()
    elevator_id: number;

    @Field(() => ID)
    @Column()
    battery_id: number;

    @Field(() => ID)
    @Column()
    building_id: number;

    @Field(() => ID)
    @Column()
    column_id: number;

    @Field(() => ID)
    @Column()
    customer_id: number;

    @Field(() => ID)
    @Column()
    employee_id: number;

    @Field(() => ID)
    @Column()
    author: number;

    @Field(() => Elevators)
    @ManyToOne(() => Elevators, elevator => elevator.interventions)
    @JoinColumn({ name: 'elevator_id', referencedColumnName: 'id' })
    elevator: Elevators;
    
    @Field(() => Customers)
    @ManyToOne(() => Customers, customer => customer.interventions)
    @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
    customer: Customers;
}
