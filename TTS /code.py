#initially install gtts module through this command(pip install gtts)

from gtts import gTTS

language="en"
text1=input("Enter the sentences: ")
speech=gTTS(text=text1,lang=language,slow=False)
speech.save("tts.mp3")
