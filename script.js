function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US'; // يمكنك تغيير اللغة هنا إذا كنت تستخدم كلمات باللغة العربية
  utterance.rate = 0.5; // هذه القيمة هي التي ستبطئ النطق، يمكنك تعديلها حسب الحاجة
  speechSynthesis.speak(utterance);
}

// دالة نطق الكلمة التي يكتبها المستخدم
function speakUserWord() {
  const userInput = document.getElementById('userInput').value;  // الحصول على الكلمة من حقل الإدخال
  if (userInput.trim() !== '') {  // التأكد من أن المستخدم كتب كلمة
      const utterance = new SpeechSynthesisUtterance(userInput);
      utterance.lang = 'en-US'; // يمكنك تغيير اللغة هنا
      utterance.rate = 0.5; // التحكم في سرعة النطق
      speechSynthesis.speak(utterance);
  } else {
      alert('اكتب كلمة ليتم نطقها');
  }
}
