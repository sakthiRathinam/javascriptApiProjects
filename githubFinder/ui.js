class UI{
	constructor(){
	this.profile=document.querySelector('#profile')
}

showProfile(user){
	this.profile.innerHTML=`
	<div class="card card-body mbn-3">
		<div class="row">
			<div class="col-md-3">
				<img class="img-fluid mb-2" src="${user.avatar_url}">
				<a href="${user.html_url}" class="btn btn-primary btn-block mb-3" target="_blank">view profile</a>
			</div>
			<div class="col-md-9">
				<span class="badge badge-primary">Public repos:${user.public_repos}</span>
				<span class="badge badge-success">Public gists:${user.public_gists}</span>
				<span class="badge badge-secondary">followers:${user.followers}</span>
				<span class="badge badge-info">following:${user.following}</span>
				<br><br>
				<ul class="list-group">
			        <li class="list-group-item">Company: ${user.company}</li>
			        <li class="list-group-item">Website/Blog: ${user.blog}</li>
			        <li class="list-group-item">Location: ${user.location}</li>
			        <li class="list-group-item">Member Since: ${user.created_at}</li>
			    </ul>
    		</div>
   		</div>
  	</div>
  	<h3 class="page-heading mb-3">latest repos</h3>
  	<div id="repos"></div>`
}
showRepos(repos){
	let output=''
	repos.forEach(function(repo){
		output+=`
				<div class="card card-body mb-2">
		          <div class="row">
		            <div class="col-md-6">
		              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
		            </div>
		            <div class="col-md-6">
		            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
		            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
		            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
		            </div>
		          </div>
		        </div>`
	});
	document.getElementById('repos').innerHTML=output
}
clearProfile(){
	this.profile.innerHTML="";
}
showAlert(message,alert){
	this.clearAlert();
	const div =document.createElement('div');
	div.className=alert;
	div.appendChild(document.createTextNode(message));
	const container=document.querySelector('.searchContainer');
	const search=document.querySelector('.search')
	container.insertBefore(div,search);
	setTimeout(()=>{
		this.clearAlert()
	},3000);
}
clearAlert(){
	const alert=document.querySelector('.alert')
	if(alert){
		alert.remove();
	}
}
}