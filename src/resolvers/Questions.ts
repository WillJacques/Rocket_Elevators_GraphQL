import { Arg, Query, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';
import { Interventions } from '../entity/Interventions';
import { Buildings } from '../entity/Buildings';
import { Employees } from '../entity/Employees';
import { FactIntervention } from '../entity/FactIntervention';
import { Customers } from '../entity/Customers';

@Resolver()
export class Questions {
  
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
}