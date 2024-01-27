# How to use props in React

![cover](./src/props.JPG)


## 🦉 Main information

Simple exercise to learn how to use props in React.

Props are inputs to a React component. They are data passed down from a parent component to a child component.

Let's learn how they work using the example of a simple dating app.

First, we need to create a new React project with an empty App.js file.

```
function App() {
  return (
    <div>
    
    </div>
  );
}

export default App;

```

Next step we need to create a new document in the src folder and let's called it Profile.js. We will create a profile card where we will have a profile photo and some information like a name, an age, height, weight and About section. For this we need one `img` tag for photo, `h2` for name and a few `p` for other information.

```
function Profiles() {
    return (
        <div>
            <img />
            <h2>Name:</h2>
            <p>Age:  | Height:  | Weight: </p>
            <p>About: </p>
        </div>
    )
}

export default Profiles;
```

I specifically leave empty spaces after the colon since we will transfer this information from the parent App.js to the child Profile.js.

We will now import this component into the App.js components.

```
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <Profiles/>
    </div>
  );
}

```
Let's add the necessary props to our component. We will have 3 cards with the different girls profiles.

```
function App() {
  return (
    <div">
      <Profiles
        img=""
        name=""
        age=""
        height=""
        weight=""
        description=""
      />
      <Profiles
        img=""
        name=""
        age=""
        height=""
        weight=""
        description=""
      />
      <Profiles
        img=""
        name=""
        age=""
        height=""
        weight=""
        description=""
      />
    </div>
  );
}

export default App;
```




## 🦊 Useful links







## ⚡ Built With

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

