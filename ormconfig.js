module.exports = [
  {
    name: "default",
    type: "mysql",
    synchronize: false,
    logging: true,
    //database: "Rocket_app_development",
    //username: "root",
    //password: "WJg0r3n0!",
    database: "wj",
    host: "ls-e1fb9b02772512196d99b3a8ad7e487d387634cf.cekcgmjdil4g.ca-central-1.rds.amazonaws.com",
    username: "dbmasteruser",
    password: "WJg0r3n0!",
    entities: ["src/entity/**/*.ts"]
  },
  {
    name: "postgres",
    type: "postgres",
    host: "codeboxx-postgresql.cq6zrczewpu2.us-east-1.rds.amazonaws.com",
    database: "William_Jacques_DWH",
    username: "codeboxx",
    password: "Codeboxx1!",
    //database: "postgres",
    //username: "postgres",
    //password: "WJg0r3n0",
    schema: 'public',
    synchronize: false, 
    logging: true,
    entities: ["src/entity/**/*.ts"]
  }
];