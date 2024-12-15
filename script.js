function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // يمكنك تغيير اللغة هنا إذا كنت تستخدم كلمات باللغة العربية
    utterance.rate = 0.5; // هذه القيمة هي التي ستبطئ النطق، يمكنك تعديلها حسب الحاجة
    speechSynthesis.speak(utterance);
  }
