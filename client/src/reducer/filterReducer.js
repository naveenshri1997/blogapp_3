const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_POST":
            return {
                ...state,
                filter_posts: [...action.payload],
                all_posts: [...action.payload],

            }

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_POSTS":
            let { all_posts } = state;
            let {filter_posts}= state;
            let tempFilterPost = [...all_posts];
            console.log('tempfilterpost', tempFilterPost);
            console.log('all_posts', all_posts);
            // console.log('searchFilterPosts',searchFilterPost);
            console.log('filterreducer filter post',filter_posts);

            const { text, category } = state.filters;
           
           
            if (category != 'Trending') {
                tempFilterPost = tempFilterPost.filter((curElm) => {
                    return curElm.category === category;
                })
                console.log('tempFilterPost reducer', tempFilterPost);
            }
            // if (text) {
            //     tempFilterPost = all_posts.filter((curElm) => {
            //         return curElm.post_para.toLowerCase().includes(text);
            //     })
            //     console.log('tempFilterPost text reducer', tempFilterPost)
            // }
            
            return {
                ...state,
                filter_posts: tempFilterPost,

            }

        default: {
            return state;
        }
    }

}
export default filterReducer