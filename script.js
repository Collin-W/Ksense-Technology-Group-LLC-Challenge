//Using jQuery or vanilla JS you will display each 'USER' in a table.
//When the user selects a 'USER' in the table, it will display all of the 'POSTS'
//that were created by that 'USER'. You have full freedom in how you accomplish
//the above objectives. You also have full freedom as far as design is concerned


//user obj mapped to a 
//table of user links
//a link will get the vlaue of user and make an api call for posts
//posts are rendered to dom

//start with a test api


const testObj = [
    {
        user: 'Collin',
        posts: [
            {
            post: "Hello Mike"
        },
        {
          post: "I like tea."
      }
  ]
    },
    {
      user: 'Mike',
      posts:[ {
          post: "Hello Collin"
      },
      {
          post: "I like coffee."
      }
    ]
  }
];

function fetchJSON(x) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(response => {
       

        renderUserTable()
    })

    
function renderUserTable(){

    }

function fetchUserPosts() {

    }