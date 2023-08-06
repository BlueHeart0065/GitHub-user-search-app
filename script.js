
var search = document.getElementsByClassName("searchButton")[0];

search.onclick = function () {
    var name = document.getElementsByClassName("search-input")[0].value;
    var avatar = document.getElementsByClassName("profilePic")[0];
    var username = document.getElementsByClassName("name")[0];
    var date = document.getElementsByClassName("date")[0];
    var at = document.getElementsByClassName("at")[0];
    var profileBio = document.getElementsByClassName("bio")[0];
    var repos = document.getElementsByClassName("repo-value")[0];
    var Followers = document.getElementsByClassName("followers-value")[0];
    var Following = document.getElementsByClassName("following-value")[0];
    var Location = document.getElementsByClassName("location-value")[0];
    var twitterLink = document.getElementsByClassName("twitter-link")[0];
    var githubURL = document.getElementsByClassName("github-url")[0];
    var atgit = document.getElementsByClassName("atgit-value")[0];


    name = name.split(' ').join('');


    fetch("https://api.github.com/users/" + name)
        .then(response => { return response.json() })
        .then(data => {
            avatar.src = data.avatar_url;
            username.innerHTML = data.name;
            date.innerHTML = "Joined " + data.created_at.split('-').join(' ');
            at.innerHTML = data.email;
            profileBio.innerHTML = "Last updated on " + data.updated_at;
            repos.innerHTML = data.public_repos;
            Followers.innerHTML = data.followers;
            Following.innerHTML = data.following;
            Location.innerHTML = data.location;
            twitterLink.innerHTML = data.twitter_username;
            githubURL.innerHTML = data.url;
            atgit.innerHTML = data.company;
            
            if(!data.name){
                username.innerHTML = "(name hidden)";
                console.log("reached");
            }

        })
        .catch(error => {
            console.error("Error fetching profile data:", error);
        })
}


var theme = document.getElementsByClassName("sun")[0];
var themeText = document.getElementsByClassName("light-text")[0];
var flag = 0;

theme.onclick = switchTheme;
themeText.onclick = switchTheme;

function switchTheme(){
    document.body.classList.toggle("lightmode");
    if(flag == 0){
        document.getElementsByClassName("light-text")[0].innerHTML = "DARK ";
        theme.src = "assets/darkmode-logo.png"
        flag = 1;
    }
    else{
        document.getElementsByClassName("light-text")[0].innerHTML = "LIGHT";
        theme.src = "assets/ligthMode-logo.png"
        flag = 0;
    }
}