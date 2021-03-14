import './App.css';

import "./projects.json"
import projects from "./projects.json";

function App() {
  return (
    <div className="App">
     
      {projects.map(({category,image,title},idx)=>{
        return(
          <div key={idx}>
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
