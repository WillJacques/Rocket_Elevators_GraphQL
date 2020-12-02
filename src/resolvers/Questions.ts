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
  customerInfos(@Arg('email_company_contact') email_company_contact: String): Promise<Customers>  {
    return Customers.findOneOrFail({ where: { email_company_contact: email_company_contact },join: {
        alias: 'customer',
        leftJoinAndSelect: {
          buildings: 'customer.buildings',
          batteries: 'customer.batteries',
          columns: 'customer.columns',
          elevators: 'customer.elevators',
        },
      }, } );
  }

  @Query(() => FactIntervention)
  byId(@Arg('ID') ID: Number){
    return getRepository(FactIntervention, 'postgres').findOne({where: { ID: ID },});
  }

  @Query(() => [FactIntervention])
  byBuildingID(@Arg('buildingID') buildingID: Number){
    return getRepository(FactIntervention, 'postgres').findOne({where: { buildingID: buildingID },});
  }

  @Query(() => [FactIntervention])
  byEmployeeID(@Arg('employeeID') employeeID: Number){
    return getRepository(FactIntervention, 'postgres').findOne({where: { employeeID: employeeID },});
  }

  @Query(() => Customers)
  IsCustomer(@Arg('email_company_contact') email_company_contact: String){
    return getRepository(Customers, 'default').findOne({where: { email_company_contact: email_company_contact },});
  }
}