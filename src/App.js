import './App.css';

import "./projects.json"
import projects from "./projects.json";

function App() {
  return (
    <div className="App">
     
      {Object.entries(projects).map(([key,{category,image,title}])=>{
        return(
          <div key={key}>
            <h1>{title}</h1>
            <img src={image} width={300} height={"auto"} alt={image} />
            <p>{category}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
