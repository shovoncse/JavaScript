// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {

    // Get user input
    const searchText = e.target.value;
    // Validate
    if(searchText !== ''){
        github.getUser(searchText).then(data => {
            //console.log(data)
            if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            }else{
                //Show Profile
                console.log(data.profile)
                console.log(data.repos)
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }   
        });

    }else{
        // Clear Profile
        ui.clearProfile();
    }
});