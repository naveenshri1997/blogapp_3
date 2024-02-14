import React from 'react'
// import ScrollCategory from './ScrollCategory'
import { SearchByTopic } from './SearchByTopic'
import RelatedBlog from './RelatedBlog'
import { useFilterContext } from '../context/filtercontext';
const ScrollCategory = React.lazy(()=>  import("./ScrollCategory"));

const Divider = () => {
    
const {isLoading, filter_posts,all_posts} = useFilterContext();
const {filters:{category},updateFilterValue} = useFilterContext();
console.log('posts in divider page== ',filter_posts);

if(isLoading){
    return <div> ... Loading </div>;
}

const getUniqueData =(data,property) =>{
    let newVal = data.map((curElem)=>{
        return curElem[property];
    })
    return (newVal = ['Trending',...new Set(newVal)]);
    console.log(newVal);
  }
const categoryonlydata = getUniqueData(all_posts,"category");
console.log('categoryonlydata divider page',categoryonlydata);


    return (
        <>
            <section>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-8 border_right allsidepadd">
                             <Suspense fallback={<div>Loading</div>}>
                            <ScrollCategory 
                            filter_posts={filter_posts}
                            categoryonlydata={categoryonlydata} /> 
                        </Suspense> 
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

export default Divider
