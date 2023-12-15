export default function Home() {
  return (
    <div>
      <p>This is our /page.tsx file. It has a React component called Home() which renders this HTML. Very neat.</p>
      <h1>TODO</h1>
      <p>Do whatcha do!</p>
      <p>I suppose this isn't much of a TODO list yet. We should probably have the user enter some text or something....Lets see what we can do.</p>
      <p>Lets look up some elements we can user for users to input text</p>
      <p>I think I found it. <input type="text"/></p>
      <p>Woah! when I type anything in the input element, I can't see anything? Its because I'm using white text on a white background. Lets try changing that. Gonna have to edit some css</p>
      <p>What do you think? Change the text black? or change the background black? I'm thinking the background so it matches the rest of the page.</p>
      <p>Bleh....JSX doesn't let me do class attribute in an element. Now I have to look up how to set a class attribute lol, I knew there was a reason I like Svelte better 😉</p>
      <p>Ah yes, you must use "className" instead of "class" .... fiddle-dee-dee</p>
      <p>ok lets try it</p>
      <input className="black-background" type="text" />
      <p>ok, looks like className works, but now I need some css...</p>
    </div>
  )
}
