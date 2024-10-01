function playTTS() {
    const text = document.getElementById("textInput").value;
    const audioPlayer = document.getElementById("audioPlayer");

    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    // Construct the Google Translate TTS URL
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`;

    // Set the audio source and play
    audioPlayer.src = ttsUrl;
    audioPlayer.style.display = "block";
    audioPlayer.play();
}
