import React, { useEffect, useRef, useState } from 'react'
import { useFilterContext } from '../context/filtercontext';
export const SearchByTopic = () => {

const {isLoading, filter_posts,all_posts} = useFilterContext();
const {filters:{category},updateFilterValue} = useFilterContext();

const getUniqueData =(data,property) =>{
  let newVal = data.map((curElem)=>{
      return curElem[property];
  })
  return (newVal = ['Trending',...new Set(newVal)]);
  console.log(newVal);
}
const categoryonlydata = getUniqueData(all_posts,"category");

  return (
    <>
        <div className='topic_search'>
            <h3 className='title'>Recomended Topics</h3>
            <div className="bt">
            {
                   categoryonlydata.map((curElem,index)=>{
                          return(
                            <>     
                        <button class="rounded-pill cus_bg2 fw-normal badge text-dark px-4 py-2 mx-1 my-1 fw-normal" 
                         key={index} name='category' value={curElem} onClick={updateFilterValue}>
                          {curElem}</button>                        
                                  </>
                                      )
                                    })
                                  }
                    </div>
        </div>
    </>
  )
}