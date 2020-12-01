import { BaseEntity, Column, Index, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Elevators } from "./Elevators";

@Index("index_interventions_on_elevator_id", ["elevator_id"], {})

@ObjectType()
@Entity('interventions', { schema: 'Rocket_app_development' })
export class Interventions extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;
    
    @Field()
    @Column()
    status: string;

    @Field()
    @Column()
    report: string;

    @Field()
    @Column()
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

    @Field(() => Elevators)
    @ManyToOne(() => Elevators, elevator => elevator.interventions)
    @JoinColumn({ name: 'elevator_id', referencedColumnName: 'id' })
    elevator: Elevators;
}