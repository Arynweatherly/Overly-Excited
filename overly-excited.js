// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
    function addExcitement (theWordArray, punctuation, amount) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let symbol = punctuation
    for (let i = 1; i < amount; i++) {
        symbol = punctuation + symbol 
    }

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1) % 3 === 0){
            buildMeUp = buildMeUp + " " + theWordArray[i] + punctuation
        }
        else {
            buildMeUp = buildMeUp + " " + theWordArray[i]
        }
                console.log(buildMeUp);
        // Concatenate the new word onto buildMeUp

        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "🐙", 3)