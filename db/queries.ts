import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number.parseInt(process.env.POSTGRES_PORT ? process.env.POSTGRES_PORT : ''),
})

export default async function runQuery() {
  const client = await pool.connect()
  const result = await client.query('SELECT NOW()')
  client.release()
  return result.rows
}

