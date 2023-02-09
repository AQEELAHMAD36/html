
// highlightBoldWords Function
function highlightBoldWords(paragraph) {
    const boldWords = [];
    let currentWord = '';
  
    // Loop through all the words in the paragraph
    for (let i = 0; i < paragraph.length; i++) {
      const currentCharacter = paragraph[i];
  
      // If the current character is a space
      if (currentCharacter === ' ') {
        // Push the current word to the boldWords array
        boldWords.push(currentWord);
        currentWord = '';
      } else {
        // Otherwise, add the current character to the current word
        currentWord += currentCharacter;
      }
    }
  
    // Get the paragraph element
    const paraElement = document.getElementById('paragraph');
  
    // Loop through all the words in the paragraph
    for (let i = 0; i < paraElement.childNodes.length; i++) {
      const node = paraElement.childNodes[i];
  
      // If the node is a text node
      if (node.nodeType === 3) {
        const data = node.data;
  
        // Loop through all the bold words in the paragraph
        for (const boldWord of boldWords) {
          // If the node data contains the bold word
          if (data.includes(boldWord)) {
            const text = document.createTextNode(data);
            const bold = document.createElement('strong');
            bold.appendChild(text);
            // Replace the node with the bold element
            paraElement.replaceChild(bold, node);
  
            // Add an event listener to the bold element
            bold.addEventListener('mouseover', () => {
              // When the mouse hovers over the bold element, highlight it
              bold.style.backgroundColor = '#FFFF00';
            });
            bold.addEventListener('mouseout', () => {
              // When the mouse leaves the bold element, remove the highlight
              bold.style.backgroundColor = null;
            });
          }
        }
      }
    }
  }
  