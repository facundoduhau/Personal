function fetchPostData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Post data fetched")
        }, 3000);
    });
};

function fetchCommentData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comment data fecthed with no errors")
        }, 6000);
    });
}

fetchPostData();
fetchCommentData();