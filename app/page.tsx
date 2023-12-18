export default function Home() {
  return (
    <div>
      <h1>TODO</h1>
      <p>Do whatcha do!</p>
      <form action="post" method="get">
        <div>
          <label htmlFor="name">whatcha doin'?: </label>
          <input className="todo-input" type="text" name="name" id="name" required />
        </div>
        <div>
          <input type="submit" value="submit!" />
        </div>
      </form>
    </div>
  )
}
