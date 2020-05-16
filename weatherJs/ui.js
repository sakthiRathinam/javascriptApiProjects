class UI{
	constructor(){
		this.location=document.getElementById('w-location');
	    this.desc = document.getElementById('w-desc');
	    this.string = document.getElementById('w-string');
	    this.details = document.getElementById('w-details');
	    this.icon = document.getElementById('w-icon');
	    this.humidity = document.getElementById('w-humidity');
	    this.feelsLike = document.getElementById('w-feels-like');
	    this.dewpoint= document.getElementById('w-dewpoint');
	    this.wind = document.getElementById('w-wind');
	}
	paint(data){
		this.location.textContent=data.name;
		this.desc.textContent=data.weather[0].description;
		this.string.textContent=data.main.temp;
		let iconcode = data.weather[0].icon;
		let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
		this.icon.setAttribute('src',iconurl);
		this.humidity.textContent=`humdity:${data.main.humidity}`;
		this.feelsLike.textContent=`feelslike:${data.main.feels_like}`;
		this.dewpoint.textContent=`pressure:${data.main.pressure}`;
		this.wind.textContent=`wind:${data.wind.deg}`;
	}
}