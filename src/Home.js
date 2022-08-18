import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './redux/slices/counterSlice'
import { fetchPosts } from './redux/slices/postSlice'

export const Home = () => {
    const count = useSelector(state => state.counterReducer.value)
    const posts = useSelector(state => state.postReducer.posts)
    const poststatus = useSelector(state => state.postReducer.status)

    const dispatch = useDispatch();
    console.log(posts);
    console.log(poststatus);

    useEffect(() => {
        if (poststatus === 'idle') {
            console.log("Loading posts")
            dispatch(fetchPosts())
        }
    }, [poststatus, dispatch])

  return (
    <>
    <div onClick={() => dispatch(increment(5))}>+</div>
    <div>Counter: {count}</div>
    <div onClick={() => dispatch(decrement(5))}>-</div>
    </>
  )
}
