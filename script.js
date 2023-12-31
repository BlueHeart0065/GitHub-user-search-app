
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
    var atgit = document.getElementsByClassName("atGit-value")[0];


    name = name.split(' ').join('');


    fetch("https://api.github.com/users/" + name)
        .then(response => { return response.json() })
        .then(data => {

            var realDateJoined = "";
            var realDateUpdate = "";
            for(var i = 0;i < 10;i++){
                realDateJoined += data.created_at[i];
                realDateUpdate += data.updated_at[i];
            }

            avatar.src = data.avatar_url;
            username.innerHTML = data.name;
            date.innerHTML = "Joined " + realDateJoined;
            at.innerHTML = "Last updated on " + realDateUpdate;
            profileBio.innerHTML = data.bio;
            repos.innerHTML = data.public_repos;
            Followers.innerHTML = data.followers;
            Following.innerHTML = data.following;
            Location.innerHTML = data.location;
            twitterLink.innerHTML = data.twitter_username;
            githubURL.innerHTML = data.url;
            atgit.innerHTML = data.company;

            if (!data.name) {
                username.innerHTML = "(name hidden)";
            }
            if (!data.created_at) {
                date.innerHTML = "Date of creation not available";
            }
            if (!data.updated_at) {
                at.innerHTML = "Last update time is unknown";
            }
            if (!data.bio) {
                profileBio.innerHTML = "User hasn't written anything in his bio";
            }
            if (!data.location) {
                Location.innerHTML = "location not given by the user";
            }
            if (!data.twitter_username) {
                twitterLink.innerHTML = "twitter url not provided by the user";
            }
            if (!data.company) {
                atgit.innerHTML = "no company joined yet";
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

function switchTheme() {
    document.body.classList.toggle("lightmode");
    if (flag == 0) {
        document.getElementsByClassName("light-text")[0].innerHTML = "DARK ";
        theme.src = "assets/darkmode-logo.png"
        flag = 1;
    }
    else {
        document.getElementsByClassName("light-text")[0].innerHTML = "LIGHT";
        theme.src = "assets/ligthMode-logo.png"
        flag = 0;
    }
}