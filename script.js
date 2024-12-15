function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // يمكنك تغيير اللغة هنا إذا كنت تستخدم كلمات باللغة العربية
    speechSynthesis.speak(utterance);
  }
  
