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
    user: "Collin",
    posts: [
      {
        post: "Hello Mike",
      },
      {
        post: "I like tea.",
      },
    ],
  },
  {
    user: "Mike",
    posts: [
      {
        post: "Hello Collin",
      },
      {
        post: "I like coffee.",
      },
    ],
  },
];

function fetchJSON() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => {
      let userName = response.name;
      let id = response.id;
      renderUserTable(userName, id);
    });
}

function renderUserTable(userName, id) {
  for (var i = 0; i < 15 && id.length; i++) {
    let table, row, cell;

    table = document.createElement("table");
    row = table.insertRow([i]);
    cell = row.insertCell([i]);
    cell = document.createElement("a");
    cell.innerHTML = userName; //$(this).attr('value');
    cell.setAttribute("class", "userCell");
    cell.setAttribute("value", id);
    document.getElementById("table-section").appendChild(table);
  }
}

function fetchUserPosts(userId) {
  let id = String(userId);
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => response.json())
    .then((response) => {
      console.log("hello");
    });
}

$("call-api").onClick(function () {
  fetchJSON();
});

$(".userCell").click(function () {
  var userId = $(this).attr("value");
  fetchUserPosts(userId);
});
