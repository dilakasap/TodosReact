
import './App.css';
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [active,setActive]=useState([]);
  const [complete,setComplete]=useState([]);
  const onClick = ((e) => {
    e.preventDefault();
    setList([...list,text]);
    setText("");

  })
  const onChangeInput = ((e) => {
    setText(e.target.value);
  })
  const handleChange = ((e)=>{
    const a =e.target.checked;
    if(a===true){
      e.target.parentElement.parentElement.classList="completed";
    }
    else(
      e.target.parentElement.parentElement.classList.remove("completed")
    )
  })
  const removeButton=((e)=>{
e.target.parentElement.parentElement.remove();
  })
  const listActive =((e)=>{
    let a="";
    a+=document.getElementById("btn");
    e.preventDefault();
    if(e.target.value=="Active"){
      setActive([a.parentElement.parentElement.value]);
      console.log(active);
    }
  })

  return (
    <div className="App">
      <button className="ignore"></button>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onClick}>
            <input value={text} onChange={onChangeInput} className="new-todo" placeholder="What needs to be done?" autoFocus></input>
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox"></input>
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {
              list.map ((l,i)=>(
                <li key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" onChange={handleChange}></input>
                <label>{l}</label>
                <button id="btn" onClick={removeButton} className="destroy"></button>
              </div>
            </li>
              ))


            }
            
          </ul>
        </section>


        <footer className="footer">


          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <button value="All" className="selected" >All</button>
            </li>
            <li>
              <button value="Active" onClick={listActive}>Active</button>
            </li>
            <li>
              <button value="Completed">Completed</button>
            </li>
          </ul>


          <button className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>

    </div>
  );
}

export default App;
