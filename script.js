//Using jQuery or vanilla JS you will display each 'USER' in a table.
//When the user selects a 'USER' in the table, it will display all of the 'POSTS'
//that were created by that 'USER'. You have full freedom in how you accomplish
//the above objectives. You also have full freedom as far as design is concerned

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => {
      for (var i = 0; i < response.length; i++) {
        let userName = response[i].name;
        let id = response[i].id;
        renderUserTable(userName, id);
      }
    });
}

function renderUserTable(userName, id) {
  let table, row;
  
  let arrUserName = [userName];
  let arrId = [id];
  table = document.createElement("table");
  table.setAttribute("id", "userTable");
  row = table.insertRow("Users");

  for (var i = 0; i < 15 && arrId.length; i++) {
    let cell, p;

    cell = row.insertCell([i]);
    p = document.createElement("button");
    p.textContent = arrUserName[i]; 
    cell.appendChild(p);
    row.appendChild(cell);
    cell.setAttribute("class", "userCell");
    cell.setAttribute("value", arrId[i]);
    document.getElementById("table-section").appendChild(table);
  }
}

function fetchUserPosts(userId) {
  let id = String(userId);
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => response.json())
    .then((response) => {
      let postTitle = response.title;
      let postBody = response.body;
      renderUserPosts(postTitle, postBody);
    });
}

function renderUserPosts(postTitle, postBody) {
  $("#userTable").hide();
  for (var i = 0; i < 10 && postTitle.length; i++) {
    let title, body, post;

    title = document.createElement("h3");
    body = document.createElement("p");
    post = document.createElement("div");
    title.textContent = postTitle;
    body.textContent = postBody;
    post.appendChild(title);
    post.appendChild(body);
    document.getElementById("post-section").appendChild(post);
  }
}

$("#call-api").click(function () {
  fetchUsers();
});

$(".userCell").click(function () {
  var userId = $(this).attr("value");
  console.log('hello')
  fetchUserPosts(userId);
});
