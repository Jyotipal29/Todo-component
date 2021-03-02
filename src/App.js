import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        task: e.target[0].value,
        done: false
      }
    ]);
  }

  function clickHandler(item) {
    setTasks([...tasks, (item.done = !item.done)]);
  }

  return (
    <div style={{ textAlign: "center", width: "50vh", margin: "auto" }}>
      <h1>ToDo list </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter some text" />
        <input type="submit" />
      </form>

      <ul>
        {tasks
          .filter((item) => item.done === false)
          .map((item) => {
            return (
              <li
                style={{ margin: "1rem" }}
                key={tasks.indexOf(item)}
                onClick={() => clickHandler(item)}
              >
                {item.task}
              </li>
            );
          })}
      </ul>

      <ul>
        {tasks
          .filter((item) => item.done === true)
          .map((item) => {
            return (
              <li key={tasks.indexOf(item)} onClick={() => clickHandler(item)}>
                <s>{item.task}</s>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default ToDo;
