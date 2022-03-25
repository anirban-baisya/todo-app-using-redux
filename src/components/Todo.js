import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../redux/action';

//we use redux to avoid the props driling method


function Todo() {

          const [inputData, setInputData] = useState('');
          const dispatch = useDispatch();
          const list = useSelector((state)=> state.reducer.list) //to get data from store.js (i can also check this in browser > state > redux_tab > chart)
            //now i have to map the items from list
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add your list here ✌️</figcaption>
          </figure>

          <div className="mb-3 form">
            <input
              placeholder="e.g. ✍️"
              onChange={(e) => setInputData(e.target.value)}
              value={inputData}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={(e) => dispatch(addTodo(inputData), setInputData(""))} //once the addTodo action triggered , i empty the input box field by calling setInputData('')
            ></i>
          </div>

          <div className="showItems">

            {list.map((elem) => {
                {/* now i have to map the items from list && inside "elem" i have the all redux stored data  */}
              
              return (
               <div className="eachItem" key={elem.id}> {/*if i dont pass the key it will give error  */}
                <h3>{elem.data}</h3>

                <div className='todo-btn'>
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={(e) =>
                    dispatch(deleteTodo(elem.id))
                  } 
                ></i>
                </div>

              </div>
              )

            })}

          </div>


                    <button className='btn1'  
                    onClick={(e) =>
                    dispatch(removeTodo())} >
                        clear All
                    </button>

        </div>
      </div>
    </>
  );
}

export default Todo

// ******* //useDispatch():
// useDispatch() hook is equivalent of mapDispatchToProps.

// We will invoke useDispatch and store it to a variable, dispatch. This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
// And we dispatch it by calling dispatch passing in the return value from the action creator.
//dispatch(addTodo(inputData)) //passing inputData inside addTodo because inside this i have the userinput ; then this method goes to action.js ; after going to action.js it check which func. is called(addTodo) ; then it check the type :ADD_TODO ;
// after that  this "addTodo" goes to reducer 