import React, { useEffect, useRef, useState } from 'react'
import BlogTitleContainer from './BlogTitleContainer'
import { useFilterContext } from '../context/filtercontext';
const ScrollCategory = ({filter_posts,categoryonlydata}) => {
const {filters:{category},updateFilterValue} = useFilterContext();
  console.log("filter_posts scroll",filter_posts);
console.log(categoryonlydata);
  console.log(filter_posts);
  const elementRef = useRef(null);
  
 
  const fun1 = (e) => {
    elementRef.current.scrollLeft += 20;
  }

  return (
    <>
      <div className='scroll_category'>
        <div className='scrollabsbuttonbox'>
          <div>
          </div>
          <ul class="nav nav-pills" id="pills-tab " role="tablist" ref={elementRef}>
            {
              categoryonlydata.map((curElem,index) => {
                return (
                  <>
                   
                    <li class="nav-item" role="presentation">
                      <button class={`nav-link ${index === 0 ? ' active' : ''}`}  data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" key={index} name='category' value={curElem}
                        aria-selected="true" onClick={updateFilterValue}>{curElem}</button>
                    </li>
                  </>
                )
              })
            }
          </ul>

          <span className='scrollabsbutton' onClick={() => fun1()}> <i class="fa fa-chevron-right"></i> </span>
        </div>
        {
            filter_posts.map((blogs) => {
              return (
                <>
                    <BlogTitleContainer blogs={blogs} />
                </>
              )
            })}
        {/* /////////// */}
      </div>
    </>
  )
}

export default ScrollCategory

// import React, { useEffect, useRef, useState } from 'react'
// import BlogTitleContainer from './BlogTitleContainer'
// import { useFilterContext } from '../context/filtercontext';
// const ScrollCategory = () => {
  
// const {isLoading, filter_posts,all_posts} = useFilterContext();
// const {filters:{category},updateFilterValue} = useFilterContext();
// console.log('posts are here== ',filter_posts);

//   const elementRef = useRef(null);

//   if(isLoading){
//     return <div> ... Loading </div>;
//   }
//   const fun1 = (e) => {
//     elementRef.current.scrollLeft += 20;
//   }
//   const getUniqueData =(data,property) =>{
//     let newVal = data.map((curElem)=>{
//         return curElem[property];
//     })
//     return (newVal = ['Trending',...new Set(newVal)]);
//     console.log(newVal);
//   }
//   const categoryonlydata = getUniqueData(all_posts,"category");
 

//   return (
//     <>
//       <div className='scroll_category'>
//         <div className='scrollabsbuttonbox'>
//           <div>
//           </div>
//           <ul class="nav nav-pills" id="pills-tab " role="tablist" ref={elementRef}>
//             {
//               categoryonlydata.map((curElem,index) => {
//                 return (
//                   <>
                   
//                     <li class="nav-item" role="presentation">
//                       <button class={`nav-link ${index === 0 ? ' active' : ''}`}  data-bs-toggle="pill"
//                         data-bs-target="#pills-home" type="button" role="tab" key={index} name='category' value={curElem}
//                         aria-selected="true" onClick={updateFilterValue}>{curElem}</button>
//                     </li>
//                   </>
//                 )
//               })
//             }
//           </ul>

//           <span className='scrollabsbutton' onClick={() => fun1()}> <i class="fa fa-chevron-right"></i> </span>
//         </div>
//         {
//             filter_posts.map((blogs) => {
//               return (
//                 <>
//                     <BlogTitleContainer blogs={blogs} />
//                 </>
//               )
//             })}
//         {/* /////////// */}
//       </div>
//     </>
//   )
// }

// export default ScrollCategory