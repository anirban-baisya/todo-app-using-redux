// 2nd step
//after performing action who will add item into the list that is take care by reducer
// here i have to define the different actions ; reducer hold the current state & action

const initialData= { //because i have to show the items one by one
    list: []
}

const reducer =(state=initialData, action) =>{
    switch(action.type){
        case "ADD_TODO" :       //user what want to perform
                    const {id, data } = action.payload;   //destructuring from action.js
                return{
                    ...state, //geting initialData(previous state)

                    list: [  //adding current data in the from of array
                        ...state.list, // holding previous state data(initialData)
                    {
                        id:id ,
                        data: data //this is current data (user input)
                    }
                    ]
                } 


        case "DELETE_TODO" :      
                  const newList=  state.list.filter((elem) => elem.id != action.id) //geting list by state.list ; after iside(elem) we getting all the inputs one by one ; next it check if  the current element id && the list elements that i clicked for delet is matching or not if not matching it will return && store the updated data inside into newList one by one ; AND if the   elem.id == action.id(that i want to delet) is matched it does not return it else the matched thing it return all the others
                return{
                    ...state, //old data
                    list: newList
                }
                
        case "REMOVE_TODO" :      
                return{
                    ...state, 
                    list: [] //empty array to delet all
                }
                
                

                default: return state; 
    }
}


export default reducer ;