function generateVCard() {
    const inputText = document.getElementById('inputText').value;
    const numbers = inputText.trim().split('\n');
  
    let outputText = '';
    for (let i = 0; i < numbers.length; i++) {
      const randomName = generateRandomName();
      outputText += `BEGIN:VCARD\nVERSION:4.0\nN:${randomName};;;;\nFN:${randomName}\nTEL;TYPE=cell:${numbers[i].replace(/966/g, '+966')}\nEND:VCARD\n`;
    }
  
    document.getElementById('outputText').value = outputText;
  }
  
  function generateRandomName() {
  
    return names[Math.floor(Math.random() * names.length)];
  }
  