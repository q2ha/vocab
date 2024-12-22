// عندما يتم تحميل الصفحة
window.onload = function() {
  // إظهار النافذة المنبثقة بعد تحميل الصفحة
  document.getElementById('welcome-popup').style.display = 'flex';

  // إغلاق النافذة عند النقر على زر الإغلاق
  document.getElementById('close-popup').onclick = function() {
      document.getElementById('welcome-popup').style.display = 'none';
  }

  // إغلاق النافذة عند النقر في أي مكان خارج النافذة المنبثقة
  window.onclick = function(event) {
      if (event.target == document.getElementById('welcome-popup')) {
          document.getElementById('welcome-popup').style.display = 'none';
      }
  }
}

window.onload = function() {
  // الحصول على الوقت الذي تم فيه عرض النافذة آخر مرة
  const lastVisitTime = localStorage.getItem('lastVisitTime');
  const currentTime = new Date().getTime(); // الحصول على الوقت الحالي بالميلي ثانية

  // التحقق إذا كانت الفارق بين الوقتين أكثر من ساعة (3600000 ميلي ثانية)
  if (!lastVisitTime || (currentTime - lastVisitTime >= 3600000)) {
      // إذا مر أكثر من ساعة أو كانت أول زيارة، إظهار النافذة المنبثقة
      document.getElementById('welcome-popup').style.display = 'flex';
      
      // عندما يضغط المستخدم على زر "موافق"
      document.getElementById('ok-button').onclick = function() {
          // إغلاق النافذة
          document.getElementById('welcome-popup').style.display = 'none';
          // حفظ الوقت الحالي كوقت آخر زيارة
          localStorage.setItem('lastVisitTime', currentTime);
          // الانتقال إلى صفحة أخرى (مثال: صفحة home.html)
          window.location.href = 'index.html'; // قم بتغيير الرابط إلى الصفحة المطلوبة
      }

      // إغلاق النافذة عند النقر على زر الإغلاق
      document.getElementById('close-popup').onclick = function() {
          document.getElementById('welcome-popup').style.display = 'none';
          // حفظ الوقت الحالي كوقت آخر زيارة
          localStorage.setItem('lastVisitTime', currentTime);
      }

      // إغلاق النافذة عند النقر في أي مكان خارج النافذة المنبثقة
      window.onclick = function(event) {
          if (event.target == document.getElementById('welcome-popup')) {
              document.getElementById('welcome-popup').style.display = 'none';
              // حفظ الوقت الحالي كوقت آخر زيارة
              localStorage.setItem('lastVisitTime', currentTime);
          }
      }
  } else {
      // إذا كانت الزيارة خلال الساعة الماضية، لا تظهر النافذة
      document.getElementById('welcome-popup').style.display = 'none';
  }
}



function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US'; // يمكنك تغيير اللغة هنا إذا كنت تستخدم كلمات باللغة العربية
  utterance.rate = 0.5; // هذه القيمة هي التي ستبطئ النطق، يمكنك تعديلها حسب الحاجة
  speechSynthesis.speak(utterance);
}
