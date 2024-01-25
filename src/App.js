import "./App.css";
import Profiles from "./Profiles";

function App(props) {
  return (
    <div className="flex">
      <Profiles
        img="https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
        name="Jenny"
        age="23"
        height="165 cm"
        weight="55 kg"
        description="Smart, funny girl"
      />
      <Profiles
        img="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Helen"
        age="25"
        height="172 cm"
        weight="60 kg"
        description="Just want to be happy"
      />
      <Profiles
        img="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Sunshine"
        age="22"
        height="168 cm"
        weight="58 kg"
        description="Love to travel and eat sushi"
      />
    </div>
  );
}

export default App;
