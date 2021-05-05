import { CREATE_POST } from './type'

const initialState = {

  posts: [],

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST: 
      return {...state, posts: state.posts.concat([action.payload])} 
    default: return state
  }
}

export default reducer;