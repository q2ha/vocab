
    // قائمة الكلمات المحظورة
    const bannedWords = [
      'idiot', 'stupid', 'dumb', 'ugly', 'fat', 'loser', 'fool', 'hate', 'kill', 'bitch',
      'asshole', 'moron', 'dick', 'bastard', 'whore', 'slut', 'retard', 'shut up', 'shut your mouth',
      'fuck', 'damn', 'suck', 'bastards', 'shit', 'pussy', 'cock', 'cunt', 'douchebag', 'prick',
      'motherfucker', 'bastard', 'son of a bitch', 'jerk', 'dickhead', 'twat', 'cockhead', 'faggot',
      'gaylord', 'slutbag', 'dickhead', 'piss off', 'nigger', 'chink', 'gook', 'kike', 'spic', 'bimbo',
      'pussyhole', 'bastard', 'bullshit', 'dildo', 'asswipe', 'douche', 'twat', 'ass', 'cocksucker',
      'shithead', 'dickwadd', 'fucking', 'fucker', 'bitchy', 'whoreish', 'cockroach', 'arsehole', 'shitstain',
      'dogshit', 'prickhead', 'scumbag', 'moron', 'retarded', 'numbnuts', 'cuntface', 'assbag', 'freakin',
      'fucktard', 'sexist', 'racist', 'fatass', 'lardass', 'butthead', 'cockblock', 'shitface', 'cocknugget',
      'jerkoff', 'cumslut', 'fuckface', 'shithole', 'slutty', 'bitchslap', 'motherfucking', 'asshat', 'cockfag',
      'fag', 'cocklicker', 'bitchface', 'whorebag', 'cumdumpster', 'fucking asshole', 'shithead', 'retard',
      'fuckhead', 'asswipe', 'fuckface', 'prickhead', 'shitrick', 'whoreish', 'skank', 'whore', 'dickless', 'piggish',
      'homo', 'queer', 'fatty', 'numbnuts', 'foolish', 'asslicker', 'retarded', 'clown', 'spazz', 'fuckwit', 'cock',
      'ballbag', 'shitbird', 'crackwhore', 'crackhead', 'methhead', 'asshole', 'bastardization', 'dirty word', 'knobhead',
      'douchelord', 'pussyclart', 'twatface', 'anus', 'cocksucker', 'faggy', 'whorehouse', 'masturbator', 'slutwhore',
      'assfucker', 'shitbag', 'suckoff', 'gangbang', 'balllicker', 'bastardized', 'bastards', 'asswipe', 'fartknocker',
      'cuntface', 'slutbag', 'freakshow', 'assrammer', 'bitchin', 'pisshead', 'shitstain', 'bastardizer'
    ];

    // دالة نطق الكلمة المدخلة من قبل المستخدم
    function speakUserWord() {
      const userInput = document.getElementById('userInput').value.trim();  // الحصول على الكلمة المدخلة من حقل الإدخال

      // التحقق إذا كانت الكلمة المدخلة فارغة
      if (userInput === '') {
        alert('Please enter a word to be spoken in English');
        return;
      }

      // التحقق من وجود الكلمات المحظورة في المدخل
      for (let word of bannedWords) {
        if (userInput.toLowerCase().includes(word.toLowerCase())) {
          alert('Warning: Please do not write words like this.');

          // نطق رسالة التحذير
          const utterance = new SpeechSynthesisUtterance('Do not write words like this.');
          utterance.lang = 'en-US';  // تحديد اللغة الإنجليزية
          utterance.rate = 0.8;  // تحديد سرعة النطق
          speechSynthesis.speak(utterance);

          return;  // لا يتم نطق الكلمة إذا كانت تحتوي على كلمات محظورة
        }
      }

      // إذا لم تكن هناك كلمات محظورة، يتم نطق الكلمة
      const utterance = new SpeechSynthesisUtterance(userInput);
      utterance.lang = 'en-US';  // تحديد اللغة الإنجليزية
      utterance.rate = 0.5;  // تحديد سرعة النطق
      speechSynthesis.speak(utterance);
    }