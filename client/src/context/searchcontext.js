import { createContext, useContext, useEffect, useReducer } from "react";
import {usePostContext} from "./postcontext";
import searchreducer from "../reducer/searchReducer"
const SearchContext = createContext();

const  initialState ={
    filter_posts:[],
    all_posts:[],
    filters:{
        text:"",
        category:'',
    }
};
export const SearchContextProvider = ({children})=>{
    const {posts} =  usePostContext();
    console.log(posts);
    const [state,dispatch]=  useReducer(searchreducer,initialState);

    // updateFilterValue
    const updateFilterValue =(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
    };
    
    useEffect(()=>{
        dispatch({type:"FILTER_POSTS"});

    },[posts,state.filters])

    useEffect(() =>{
        dispatch({type:"LOAD_SEARCH_POST",payload:posts});
    },[posts])
    return <SearchContext.Provider value={{...state,updateFilterValue}}>
    {children}
    </SearchContext.Provider>
};

export const useSearchContext = () =>{
    return useContext(SearchContext);
}