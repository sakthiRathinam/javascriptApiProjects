import requests
import json
import pyttsx3
import speech_recognition as sr
import re
Api_Key="txz9KG1nA4F6"
PROJECT_TOKEN="tcWdjr-ajhFe"
Run_Token="tXGLtkTBBBXt"

response=requests.get(f"https://www.parsehub.com/api/v2/projects/{PROJECT_TOKEN}/last_ready_run/data",params={"api_key":Api_Key})
data=json.loads(response.text)

class Data:
	def __init__(self,api_key,PROJECT_TOKEN):
		self.api_key=api_key
		self.PROJECT_TOKEN=PROJECT_TOKEN
		self.params={
		'api_key':self.api_key
		}
		self.get_data()

	def get_data(self): 
		response=requests.get(f"https://www.parsehub.com/api/v2/projects/{self.PROJECT_TOKEN}/last_ready_run/data",self.params)
		self.data=json.loads(response.text)
	def get_total_cases(self):
		data=self.data['total']
		for content in data:
			if content['name']=='Coronavirus Cases:':
				return content['value']
	def get_total_deaths(self):
		data=self.data['total']
		for content in data:
			if content['name']=='Deaths:':
				return content['value']
	def get_country_data(self,country):
		data=self.data['country']
		for content in data:
			if content['name'].lower()==country.lower():
				return content
		return "0"

data=Data(Api_Key,PROJECT_TOKEN)

def speak(text):
	engine=pyttsx3.init()
	engine.say(text)
	engine.runAndWait()
def get_audio():
	r=sr.Recognizer()
	with sr.Microphone() as source:
		audio=r.listen(source)
		said=""

		try:
			said=r.recognize_google(audio)
		except Exception as e:
			print("Exception:",str(e))
	return said.lower()
d=get_audio()
print(d)
