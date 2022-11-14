const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
    try {
        const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });
        await pool.connect()
        const res = await pool.query(' SELECT * FROM employees')
        console.log(res)
        await pool.end()
 
    } catch (error) {
        console.log(error)
    }
};
 
const getEmployees = async () => {
   try {
        const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });
 
        await pool.connect()
        const employees = await pool.query('SELECT * FROM employees')
        console.log(employees)
        await pool.end()
        return employees;
    } catch (error) {
        console.log(error)
    } 
};

module.exports = {
    connectDb,
    getEmployees,
};