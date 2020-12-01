import { Field, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
​
@ObjectType()
@Entity('FactIntervention', { database: 'postgres', schema: 'public' })
export class FactIntervention extends BaseEntity {
    @Field( () => Int)
    @PrimaryGeneratedColumn()
    ID: number

    @Field( () => Int)
    @Column()
    employeeID: number
​
    @Field( () => Int)
    @Column()
    buildingID: number
​
    @Field( () => Int )
    @Column()
    batteryID: number
​
    @Field( () => Int )
    @Column()
    columnID: number
​
    @Field( () => Int )
    @Column()
    elevatorID: number
​
    @Field()
    @Column()
    intervention_start: Date

    @Field()
    @Column()
    intervention_stop: Date

    @Field()
    @Column()
    result: string

    @Field({nullable: true })
    @Column({nullable: true })
    report: string

    @Field()
    @Column()
    status: string
}