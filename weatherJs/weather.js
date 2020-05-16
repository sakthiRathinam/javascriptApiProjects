class Weather{
	constructor(city,state){
		this.apiKey='bf59eebdef1436696ac6244713ef5d9e';
		this.city=city;
		this.state=state;
	}
	async getWeather(){
		const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);
		const responseData=response.json()
		return responseData;
	}
	changeLocation(city,state){
		this.city=city;
		this.state=state;
	}
}