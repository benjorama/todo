import runQuery from "@/db/queries";

async function getData() {
  const rows = await runQuery()
  return { rows }
}

export default async function Home() {
  async function createTodo(formData: FormData) {
    'use server'

    const rawFormData = {
      todo: formData.get('todo')
    }
    console.log(rawFormData)
  }

  const data = await getData();
  let now = data.rows[0].now.toString()
  return (
    <div>
      <h1>TODO</h1>
      <p>Do whatcha do!</p>
      <form method="post" action={createTodo}>
        <div>
          <label htmlFor="todo">whatcha doin'?: </label>
          <input className="todo-input" type="text" name="todo" id="todo" required />
        </div>
        <div>
          <input type="submit" value="submit!" />
        </div>
      </form>
      <p>{now}</p>
    </div>
  )
}
