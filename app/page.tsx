import runQuery from "@/db/queries";

async function getData() {
  const rows = await runQuery()
  return { rows }
}

export default async function Home() {
  const data = await getData();
  let now = data.rows[0].now.toString()
  return (
    <div>
      <h1>TODO</h1>
      <p>Do whatcha do!</p>
      <form method="post">
        <div>
          <label htmlFor="name">whatcha doin'?: </label>
          <input className="todo-input" type="text" name="name" id="name" required />
        </div>
        <div>
          <input type="submit" value="submit!" />
        </div>
      </form>
      <p>{now}</p>
    </div>
  )
}
