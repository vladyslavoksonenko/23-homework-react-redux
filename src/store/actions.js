import { CREATE_POST } from "./type"

export function createPost (posts) {
  return {
    type: CREATE_POST,
    payload: posts  
  }
}

