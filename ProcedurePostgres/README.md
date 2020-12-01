# PostgreSQL Procedures

###  Contains all the procedures needed to meet codeboxx requirements.

To do the query, you need to go in Fabien_Dimitrov_Team4 MySQL database.

-----------------------------

SELECT b.employee_id, d.id building_id, b.id battery_id, c.id column_id, e.id elevator_id, interventions.intervention_start, interventions.intervention_stop, interventions.result, interventions.report, interventions.status, interventions.id

FROM interventions

INNER JOIN elevators e ON interventions.elevator_id = e.id

INNER JOIN columns c ON e.column_id = c.id

INNER JOIN batteries b ON c.battery_id = b.id

INNER JOIN buildings d ON b.building_id = d.id

--------------------------------

EXPORT in .csv to be able to import in Postgres Database Fabien_Dimitrov_DWH.

Truncate FactIntervention table and Import CSV file from MySQL.

    
## TEAM MEMBERS

  

> Fabien Dimitrov "Team Leader"
> 
> Louis-david Marmen "Member"
> 
> William Jacques "Member"
> 
> Joey Coderre "Member"

