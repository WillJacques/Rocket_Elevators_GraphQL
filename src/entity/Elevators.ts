import { BaseEntity, Column, Index, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { ObjectType, Field, ID} from "type-graphql";
import { Columns } from './Columns';
import { Interventions } from './Interventions';

@Index("index_elevators_on_column_id", ["column_id"], {})
@Index("index_columns_on_customer_id", ["customer_id"], {})
@ObjectType()
@Entity('elevators', { schema: 'Rocket_app_development' })
export class Elevators extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Field()
    @Column()
    serial_number: string;
    
    @Field()
    @Column()
    model: string;

    @Field()
    @Column()
    type_of_building: string;

    @Field()
    @Column()
    status: string;

    @Field()
    @Column()
    inspection_certificate: string;

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

    @Field()
    @Column()
    commissioning_date: Date;

    @Field()
    @Column()
    last_inspection_date: Date;

    @Field(() => ID)
    @Column()
    customer_id: number;

    @Field(() => ID)
    @Column()
    column_id: number;

    @Field(() => Columns)
    @ManyToOne(() => Columns, column => column.elevators)
    @JoinColumn({ name: 'column_id', referencedColumnName: 'id' })
    column: Columns;

    @Field(() => [Interventions])
    @OneToMany(() => Interventions, interventions => interventions.elevator)
    interventions: Interventions[];
}