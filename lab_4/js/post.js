"use strict";
let posts = [
     {
     id : 1 ,
     title : 'Docker for Rails' ,
     created_date : '2018-11-03'
     } ,
     {
     id : 2 ,
     title : 'HTML5 for Beginners' ,
     created_date : '2019-01-11'
     } ,
     {
     id : 3 ,
     title : 'CSS3 for dummies' ,
     created_date : '2018-05-18'
     } ,
     {
     id : 4 ,
     title : 'jQuery Master' ,
     created_date : '2019-10-23'
     }
     ]

     function createPostsRows(posts){
         $('#posts').html('')
         let rowsHtml=''
         posts.forEach(function(posts){
             rowsHtml+= 
             `<tr><td>${posts.id}</td><td>${posts.title}</td><td>${posts.created_date}</td></tr>`
         })
         $('#posts').html(rowsHtml)
     }
     createPostsRows(posts)
     $('#sort-button').click(function(event){
         posts=posts.sort(function(a,b){
             if(a['title']>b['title']){
                 return 1
             }
             else{
                 return -1
             }
        })
        createPostsRows(posts);
    })