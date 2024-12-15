function speakWord(word) {
    const words = word.split(' ');  // فصل الكلمات إذا كان هناك أكثر من كلمة واحدة
    let index = 0;
    
    function speakNext() {
      if (index < words.length) {
        const utterance = new SpeechSynthesisUtterance(words[index]);
        utterance.lang = 'en-US'; // تغيير اللغة إلى الإنجليزية البريطانية
        speechSynthesis.speak(utterance);
        
        index++;
        setTimeout(speakNext, 3000);  // الانتظار لمدة 3 ثواني قبل نطق الكلمة التالية
      }
    }
  
    speakNext(); // بدء الكلام
  }
  
