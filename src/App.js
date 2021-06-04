import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { AddTodo } from "./Components/AddTodo";
import { Todos } from "./Components/Todos";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) sno = 1;
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <AddTodo addTodo={addTodo} />
                    <Todos todos={todos} onDelete={onDelete} />
                  </>
                );
              }}
            ></Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
