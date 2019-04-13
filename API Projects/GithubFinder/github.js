class GitHub {
    constructor(){
        this.client_id = 'fd3a731af01e7465d321';
        this.client_secret = 'ff9472851d4747dca37d825113b7484acbf5b22c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        // Returing Object
        return {
            // profile: profile
            // repos: repos
            profile,
            repos 
        }
        
    }
    
    
}