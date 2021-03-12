import logo from "./logo.svg";
import "./App.css";
import Burger from "./Burger/Burger";
import UserProfile from "./Formvalidation/UserProfile";
import JSSDemo from "./JSSDemo/JSSDemo";
import DemoTheme from "./JSSDemo/Theme/DemoTheme";
import ToDoList from "./BaiTapStyledComponent/ToDoList/ToDoList";
import LifeCycleReact from "./LifeCycleReact/LifeCycleReact";

function App() {
  return (
    <div className="App">
      {/* <LifeCycleReact /> */}
      <ToDoList />
    </div>
  );
}

export default App;
