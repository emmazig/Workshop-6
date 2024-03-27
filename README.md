# Workshop-6

this is the URL :  (https://emmazig.github.io/Workshop-6/)
I experimented with a couple of different ideas with this sketch until I came to one I was happy with. I first wanted to have the last word rhyme with the user's input every time. I then tried swapping out any verbs with a random verb. I struggled to get both the rhyming and the change in verb to work at the same time. So I decided to use the random order function instead.


## How to add fonts:

Add the font as a local file - drag and drop- make a separate folder 
Make a variable for the font, – ‘let font;’
Add to preload – loadFont(‘path to file’)
In setup - textFont(name of variable); – all of the text will be in this font 
Then use in draw

Text = strings (can use strings as variables)


### To use RiTa in code:

Copy line of code from GitHub 
Add it to ‘index.html’ under libraries and about <head> 
Save and close

## RiTa example:

Let r = RiTa.tokenize(array);  – each word is reviewed individually
Let words = floor(random(0, words.length)) 
Floor chooses only whole numbers.
Random chooses a random word from the string

Let rhymes = RiTa.rhymesSync(words[r]);
This creates an array of words that rhyme with the random word that was chosen from the users input.

if(rhymes.length === 0){
poem.push(userLine);
} else { put all code below in these curly brackets}
This will show the users original input if no rhyming words are found.

Let changedWord = random(rhymes);  
This chooses a random rhyming word from the array

Words[r] = changedWord; 
This changes the random word from the user's input to the random rhyming word.

userLine = RiTa.untokenize(words);
This makes it a single string again.



textAlign(CENTER) — centres x and y pos for text 




