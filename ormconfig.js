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
    host: "codeboxx.cq6zrczewpu2.us-east-1.rds.amazonaws.com",
    username: "codeboxx",
    password: "Codeboxx1!",
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