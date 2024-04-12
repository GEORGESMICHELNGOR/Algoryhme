function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    
    const vowels = 'aeiouAEIOU';
    
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        
        length++;
        
        // Check if current character is a letter (to count words)
        if (char !== ' ' && (i === 0 || sentence[i - 1] === ' ')) {
            wordCount++; // Increment word count when a new word begins
        }
        
        // Check if current character is a vowel
        if (vowels.includes(char)) {
            vowelCount++; // Increment vowel count if current character is a vowel
        }
    }
    
    // Display the results
    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

// Example usage:
const inputSentence = "Hello world. This is a test sentence.";
analyzeSentence(inputSentence);
