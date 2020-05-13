const github=new gitHub();
const ui=new UI();
const user=document.getElementById('searchUser')

user.addEventListener('keyup',(e)=>{
	const userText=e.target.value;
	if(userText!==''){
		github.getUser(userText)
		.then(data=>{
			if(data.profile.message==="Not Found"){
				ui.showAlert('User Not Found','alert alert-danger');
			}else{
				//showprofile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		})
	}else{
		ui.clearProfile();
	}
});