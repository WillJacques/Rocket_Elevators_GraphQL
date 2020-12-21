import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';
import { Interventions } from '../entity/Interventions';
import { Buildings } from '../entity/Buildings';
import { Employees } from '../entity/Employees';
import { FactIntervention } from '../entity/FactIntervention';
import { Customers } from '../entity/Customers';
import { Batteries } from '../entity/Batteries';
import { Columns } from '../entity/Columns';
import { Elevators } from '../entity/Elevators';

@InputType()
class InterventionUpdateInput {
  @Field(() => String, {nullable: true})
  status: string;
}

@InputType()
class CustomerUpdateInput {
  @Field(() => String, {nullable: true})
  technical_manager_email?: string;
  @Field(() => String, {nullable: true})
  full_name_service_technical_authority?: string;
  @Field(() => String, {nullable: true})
  technical_authority_phone?: string;
  @Field(() => String, {nullable: true})
  company_description?: string;
  @Field(() => String, {nullable: true})
  company_name?: string;
  @Field(() => String, {nullable: true})
  company_headquarter_address?: string;
  @Field(() => String, {nullable: true})
  full_name_company_contact?: string;
  @Field(() => String, {nullable: true})
  company_contact_phone?: string;
}

@InputType()
class InterventionInput {
  @Field(() => String, {nullable:true})
  status?: string;
  @Field()
  report: string;
  @Field(() => String, {nullable:true})
  result?: string;
  @Field()
  elevator_id: number;
  @Field()
  battery_id: number;
  @Field()
  building_id: number;
  @Field()
  column_id: number;
  @Field()
  customer_id: number;
  @Field()
  employee_id: number;
  @Field()
  author: number;
}

@Resolver()
export class Questions {

  @Mutation(() => Boolean)
  async createIntervention(@Arg("options", () => InterventionInput) options: InterventionInput) {
    await Interventions.insert(options);
    return true;
  } 

  @Mutation(() => Boolean)
  async updateIntervention(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => InterventionUpdateInput) input: InterventionUpdateInput
  ) {
    await Interventions.update({id}, input);
    return true;
  }
  @Mutation(() => Boolean)
  async updateCustomer(
    @Arg("email_company_contact", () => String) email_company_contact: string,
    @Arg("input", () => CustomerUpdateInput) input: CustomerUpdateInput
  ) {
    await Customers.update({email_company_contact}, input);
    return true;
  }

  
  @Query(() => Interventions)
  interventionsInfos(@Arg('id') id: Number): Promise<Interventions>  {
    return Interventions.findOneOrFail({ where: { id: id },join: {
        alias: 'i',
        leftJoinAndSelect: {
          elevator: 'i.elevator',
          column: 'elevator.column',
          battery: 'column.battery',
          building: 'battery.building',
        },
      }, } );
  }

  @Query(() => Buildings)
  buildingsInfos(@Arg('id') id: Number): Promise<Buildings>  {
    return Buildings.findOneOrFail({ where: { id: id },join: {
        alias: 'building',
        leftJoinAndSelect: {
          customer: 'building.customer',
          batteries: 'building.batteries',
          columns: 'batteries.columns',
          elevators: 'columns.elevators',
          interventions: 'elevators.interventions',
        },
      }, } );
  }

  @Query(() => Batteries)
  batteryInfos(@Arg('id') id: Number): Promise<Batteries>  {
    return Batteries.findOneOrFail({ where: { id: id },join: {
        alias: 'battery',
        leftJoinAndSelect: {
          employee: 'battery.employee',
        },
      }, } );
  }

  @Query(() => Employees)
  employeesInfos(@Arg('id') id: Number): Promise<Employees>  {
    return Employees.findOneOrFail({ where: { id: id },join: {
        alias: 'employee',
        leftJoinAndSelect: {
          batteries: 'employee.batteries',
          building: 'batteries.building',
          building_details: 'building.building_details',
          columns: 'batteries.columns',
          elevators: 'columns.elevators',
          interventions: 'elevators.interventions',
        },
      }, } );
  }

  @Query(() => Customers)
  async customerBatteries(@Arg('email_company_contact') email_company_contact: String): Promise<Customers>  {
     const customer = await Customers.findOneOrFail({ where: { email_company_contact: email_company_contact },join: {
        alias: 'customer',
        leftJoinAndSelect: {
          batteries: 'customer.batteries',
        },
      }, } );
      return customer;
  }

  @Query(() => Customers)
  async customerBuilding(@Arg('email_company_contact') email_company_contact: String): Promise<Customers>  {
     const customer = await Customers.findOneOrFail({ where: { email_company_contact: email_company_contact },join: {
        alias: 'customer',
        leftJoinAndSelect: {
          buildings: 'customer.buildings',
        },
      }, } );
      return customer;
  }

  @Query(() => Customers)
  async customerColumns(@Arg('email_company_contact') email_company_contact: String): Promise<Customers>  {
     const customer = await Customers.findOneOrFail({ where: { email_company_contact: email_company_contact },join: {
        alias: 'customer',
        leftJoinAndSelect: {
          columns: 'customer.columns',
        },
      }, } );
      return customer;
  }

  @Query(() => Customers)
  async customerElevators(@Arg('email_company_contact') email_company_contact: String): Promise<Customers>  {
     const customer = await Customers.findOneOrFail({ where: { email_company_contact: email_company_contact },join: {
        alias: 'customer',
        leftJoinAndSelect: {
          elevators: 'customer.elevators',
        },
      }, } );
      return customer;
  }

  @Query(() => [FactIntervention])
  byId(@Arg('ID') ID: Number){
    return getRepository(FactIntervention, 'postgres').find({where: { ID: ID },});
  }

  @Query(() => [FactIntervention])
  byBuildingID(@Arg('buildingID') buildingID: Number){
    return getRepository(FactIntervention, 'postgres').find({where: { buildingID: buildingID },});
  }

  @Query(() => [FactIntervention])
  byEmployeeID(@Arg('employeeID') employeeID: Number){
    return getRepository(FactIntervention, 'postgres').find({where: { employeeID: employeeID },});
  }

  @Query(() => [Customers])
  IsCustomer(@Arg('email_company_contact') email_company_contact: String){
    return getRepository(Customers, 'default').find({where: { email_company_contact: email_company_contact },});
  }

  @Query(() => [Customers])
  customers(){
    return Customers.find();
  }

  @Query(() => [Elevators])
  elevators(){
    return Elevators.find();
  }

  @Query(() => [Customers])
  customerIDByCustomerEmail(@Arg('email_company_contact') email_company_contact: String){
    return Customers.find({where: { email_company_contact: email_company_contact },});
  }

  @Query(() => [Employees])
  employeeIDByEmployeeEmail(@Arg('email') email: String){
    return Employees.find({where: { email: email },});
  }

  @Query(() => [Buildings])
  buildingsByCustomerID(@Arg('customerID') customerID: Number){
    return Buildings.find({where: { customer_id: customerID },});
  }

  @Query(() => [Batteries])
  batteriesByBuildingID(@Arg('buildingID') buildingID: Number){
    return Batteries.find({where: { building_id: buildingID },});
  }

  @Query(() => [Columns])
  columnsByBatteryID(@Arg('batteryID') batteryID: Number){
    return Columns.find({where: { battery_id: batteryID },});
  }

  @Query(() => [Elevators])
  elevatorsByColumnID(@Arg('columnID') columnID: Number){
    return Elevators.find({where: { column_id: columnID },});
  }

  @Query(() => [Elevators])
  elevatorsByID(@Arg('id') id: Number){
    return Elevators.find({where: { id: id }, join: {
      alias: 'elevators',
      leftJoinAndSelect: {
        columns: 'elevators.column',
        batteries: 'columns.battery',
        employee: 'batteries.employee',
        buildings: 'batteries.building',
        customers: 'buildings.customer',
      },
    }, } );
  }
  
  @Query(() => Customers)
  async customerInfo(@Arg('email_company_contact') email_company_contact: String): Promise<Customers>  {
     const customer = await Customers.findOneOrFail({ where: { email_company_contact: email_company_contact },join: {
        alias: 'customer',
        leftJoinAndSelect: {
          interventions: 'customer.interventions',
          buildings: 'customer.buildings',
          batteries: 'buildings.batteries',
          columns: 'batteries.columns',
          elevators: 'columns.elevators',
        },
      }, } );
      return customer;
  }
}