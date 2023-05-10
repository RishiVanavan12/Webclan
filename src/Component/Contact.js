import React, { useRef, useState } from 'react'

export default function Todo() {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];
  const [todo, setTodo] = useState(['Like','Share','Comment']);
  const [arr, setArr] = useState(inputArr);
  let inputRef = useRef();
  const addTodo = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  }
  const deletTodo = (e) => {
    let hi = e.target;

  }

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  return (
    <>
    <ul>
      {
        todo.map((list,index) => {
          return (
            <li key={index}>
              <div>{list}</div>
              <button onClick={(e) => {deletTodo(e)}} >Delete</button>
            </li>
          )
        })
      }
    </ul>
    {arr.map((item, i) => {
        return (
          <input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            size="40"
          />
        );
      })}
    <button onClick={addTodo}>+</button>
    <h1> Any Problems contact : clash of clan@gmail.com </h1>
    </>
    
  )
}


  