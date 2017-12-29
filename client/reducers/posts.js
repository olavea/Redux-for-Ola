// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  //console.log("The post will change");
  //console.log(state, action);
  switch(action.type) {
    case 'INCREMENT_LIKES' :

      console.log("Incrementing Likes!!");
      // return the updated state
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
}

export default posts;


// action(what happenededd), store

//ok let me see

//return: store

// Video 9: Every time you dispatch an action, every single reducer will run. 3:00
// Video 12: in Reduc we use functional programming and what is really important about that is that we do not mutate our state
// Video 12: A pure function is a predictable function, <Wes goes into codepen.io to code an impure function: gets a different result every time.
// Video 12: What we can do isto fix this we take a copy and return the new state
// Video 12: We get the same result every time, we don't mutate an external state
// from Wes Bos video 12: Updating State with Reducers
// Once the action has been dispatched, we can use reducers to update our state.
