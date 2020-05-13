class gitHub{
	constructor(){
		this.client_id = 'c4a4105a080392a37cbd';
    	this.client_secret = '335af3c6a0adfa0198346ccbec80086446b9400e';
		this.repos_count = 5;
   	    this.repos_sort = 'created: asc';
   	}
	async getUser(user){
		const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    	const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const profile=await profileResponse.json()
		const repos=await repoResponse.json()
		return {
			profile,
			repos
		}
}
}