function calculateDays() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const resultDiv = document.getElementById('result');

    if (!year || !month || !day) {
      resultDiv.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
      return;
    }

   
    const birthDate = new Date(year, month - 1, day);
    if (
      birthDate.getFullYear() !== year ||
      birthDate.getMonth() + 1 !== month ||
      birthDate.getDate() !== day
    ) {
      resultDiv.textContent = "Iltimos, to‘g‘ri sana kiriting.";
      return;
    }

    const today = new Date();
    const currentYear = today.getFullYear();

   
    let nextBirthday = new Date(currentYear, month - 1, day);

  
    if (nextBirthday < today) {
      nextBirthday = new Date(currentYear + 1, month - 1, day);
    }

   
    const oneDay = 24 * 60 * 60 * 1000; // 1 kun millisekundlarda
    const diffDays = Math.round((nextBirthday - today) / oneDay);

    if (diffDays === 0) {
      resultDiv.textContent = "Tug‘ilgan kuningiz bugun! Tabriklaymiz! 🎉";
    } else {
      resultDiv.textContent = `Tug‘ilgan kuningizgacha ${diffDays} kun qoldi.`;
    }
  }