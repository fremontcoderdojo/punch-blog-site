---
title: An HTML and Javascript Text Adventure Game
published: true
tags:
- HTML
- CSS
- Javascript
---
*Way back in the old days, before 3D, there were lots of text adventure games. They were what we had and they were fun. In this tutorial, you will learn to make your own text adventure game with HTML, CSS and Javascript on [Codepen.io](http://codepen.io):*

1. You will the DRY principle: Do Not Repeat Yourself.
2. You will learn how functions help you not to repeat yourself.
2. You will learn how objects can store and organize lots of different data, like the data in game levels.

### First some HTML
<script src="https://gist.github.com/anonymous/db710fc6988b95537707.js"></script>

You can easily select, copy, and paste the above html code into the html window on a [new project](http://codepen.io/pen/) on codepen.

### Now the CSS
<script src="https://gist.github.com/anonymous/d68cd85821b4a15745e9.js"></script>

The code above adds a bit of style to our game. It makes the pictures a consistent size, the text readable, and everything line-up right. Copy and paste it into the CSS window on your codepen project.

### Finally the Javascript
Javascript is what makes the web interactive. We use it to put away some images and add others. It updates the text when you make a decision with a button. You might remember that variable are just containers to store information. In javscript, when you are setting a variable to remember some information for you, you use the keyword 'var'. To get started, copy and paste these variables into the 'JS' window of your project:

<script src="https://gist.github.com/anonymous/ee2d6961623662909039.js"></script>

You might have noticed that several of those match the 'ids' of our html elements: images, text, input, and buttonBox. We are giving our script a way to remember those elements so that we can do stuff to them with functions later. You will see them again.

A function is a neat little package of instructions that we know we are going to need. Functions help keep our code organized and especially help us not to have to type the same instructions over and over again. Remeber what we said about not repeating ourselves? The first function helps us to get some information from our game's player. We are asking them to name the in-game dog. Read the code, think about how it might work, and copy and paste it into your JavaScript.

* <span style="color:red;">EDIT: Previously, this next code block was a seven-lined function called submitDogName. It worked in Google's Chrome browser, but not in Firefox. There is a difference in how the browsers recognize which keys are being pressed on the keyboard. In this newer, better function, we are using the "||" operator which means 'or', so we are saying, 'If someone presses a key and it looks like this, or like this, do what we want. Web programmers end up doing lots of work-arounds like this to keep different browsers happy. If you are coming back after the fact, you can delete those seven lines and replace them with this bit of code:

<script src="https://gist.github.com/anonymous/a107e49622f53e7bf220.js"></script>

If you really want to clean up your code, you could also go back to your HTML and delete the part of the input element which says 'onkeypress="submitDogName(this)"', but it should work either way.

Next up are three functions which will save us lots of time by changing text, pictures, and buttons on the screen, don't forget to add it to your code:

<script src="https://gist.github.com/anonymous/df66b53e8682b24ef70b.js"></script>

Can you see how it is going to save us time as we advance through scenes in the game? The last bit is an object. We are using it to organize all the level or 'scenario' data. When a function needs to show the image for scenario number 4, it looks it up in the object. Makes since, right? Read it over a few times and see if you can figure it out.

<script src="https://gist.github.com/anonymous/6c10d54b959975302da0.js"></script>

Objects like this one are full of keys and values. The program then can look up the key and spit out the value. Do you see how that object (which I named scenario) is organized by number names? The number names are keys and those key's values are objects in their own right, with keys of 'image', 'text', and 'button'. So it's actually an object objects. 'One' contains the text, image location, and buttons for scene one, and so on (except there were no buttons for level one). Whew! lots to think about.

If I wanted to tell the game which text to display on level three, all I would have to do is type 'scenario.three.text', you can actually try this if you know how to open the console of your web browser.

It has probably already occured to you that you could change my 'scenario' and add your own new story - I hope you do! The trickiest part is the buttons. The buttons are lists of lists. Programmers call lists arrays, but they are just a group of items really: numbers, text, variables, whatever. Lists in javscript look like this: ['coconut', 'barbeque', 7]. Square brackets go on the outside and each item is separated by a comma. Lists can have lists inside them. Each of our 'buttons:' keys has a list of lists for values.I have set it up like this:

    [["words on button one", "scene this button will take you to"],["button two", "scene this button will take you to"]]

You can add as many buttons as you like, but you need to plan out what scene each button will take you to in advance - I made a chart on paper, numbered all of my scenes, listed the choices on thoses scenes and drew lines to the scene the choies would take me. If you do that, you will know what to put for the second part of each button, for example you might come up with a scene five which looks like:

    var scenario = 
     one: ...

     five: {
     	image: "location of an image of ice cream",
     	text: "A funny joke about melting ice cream",
     	buttons: [["lick the ice cream", "advanceTo(scenario.six)"], ["bite the ice cream", "advanceTo(scenario.seven)"],["put it in your pocket", "advanceTo(scenario.nineteen)"]]

     six: ...
     }


Have fun! Make changes!

The full code is available here [on Codepen](http://codepen.io/thehack/pen/QwdvEa).











