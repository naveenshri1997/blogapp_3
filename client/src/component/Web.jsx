import React from 'react'
import Header from './Header'
// import Divider from './Divider'
const Divider = React.lazy(()=>  import("./Divider"));
// import Skeleton from 'react-loading-skeleton'
const Web = () => {
  return (
    <>
        <Header/>
        <Suspense fallback={<div><h1>oading</h1></div>}>
        <Divider/>
                </Suspense>   
          
    </>
  )
}

export default Web
