import React ,{useRef, useState} from 'react'
import Header from './Header'
import ScrollCategory from './ScrollCategory'
import BlogTitleContainer from './BlogTitleContainer'
import { SearchByTopic } from './SearchByTopic'
import RelatedBlog from './RelatedBlog'
import { useSearchContext } from '../context/searchcontext';
export const Search = () => {
    
    const elementRef = useRef(null);
  
 
    const fun1 = (e) => {
      elementRef.current.scrollLeft += 20;
    }
  
        
const {isLoading, filter_posts,all_posts} = useSearchContext();
const {filters:{category},updateFilterValue} = useSearchContext();
console.log('posts in search page== ',filter_posts);

if(isLoading){
    return <div> ... Loading </div>;
}

const getUniqueData =(data,property) =>{
    let newVal = data.map((curElem)=>{
        return curElem[property];
    })
    return (newVal = ['All',]);
    console.log(newVal);
  }
const categoryonlydata = getUniqueData(filter_posts,"category");
console.log('categoryonlydata search page',categoryonlydata);

  return (
    <>
    <Header/>
    <section>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-8 border_right allsidepadd">
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
                        {/* <ScrollCategory 
                            categoryonlydata={categoryonlydata}
                            filter_posts={filter_posts} /> */}
                        </div>
                        <div className="col-lg-4 allsidepadd2">
                            <SearchByTopic/>    
                            <RelatedBlog />                        
                        </div>
                    </div>
                </div>
            </section>
</>
  )
}
