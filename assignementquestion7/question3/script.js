const Search = document.getElementById("searchbtn");
Search.addEventListener('click',()=>{
    UserName = document.getElementById("userName").value ;
    // console.log(UserName);
    fetch("https://api.github.com/users/" + UserName)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayUser(data);
    })
    .catch(err => console.log(err));
});

function displayUser(user) {
    console.log(user);
    const userContainer = document.getElementById("usercontainer");
    userContainer.innerHTML = "";
    var userImage = document.createElement("img");
    userImage.src = user.avatar_url;
    userImage.classList.add("avatar");
    userContainer.appendChild(userImage);

    var name = document.createElement("h3");
    name.textContent = "Name:" + user.name ;
    userContainer.appendChild(name);

    var followers = document.createElement("h3");
    followers.textContent = "followers:" + user.followers;
    userContainer.appendChild(followers);

    var Following = document.createElement("h3");
    Following.textContent = "Following:" + user.following;
    userContainer.appendChild(Following);

    
    var Bio = document.createElement("h3");
    Bio.textContent = "Bio:" + user.bio;
    userContainer.appendChild(Bio);

    var Location = document.createElement("h3");
    Location.textContent = "location :" + user.location;
    userContainer.appendChild(Location);

    var Repos =document.createElement("h3");
    Repos.textContent = "Public Repos :" + user.public_repos;
    userContainer.appendChild(Repos);


    userContainer.classList.remove("usercontainer");




 


    
}