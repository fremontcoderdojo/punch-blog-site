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

###First some HTML
<script src="https://gist.github.com/anonymous/db710fc6988b95537707.js"></script>

You can easily select, copy, and paste the above html code into the html window on a [new project](http://codepen.io/pen/) on codepen.

###Now the CSS
<script src="https://gist.github.com/anonymous/d68cd85821b4a15745e9.js"></script>
The code above adds a bit of style to our game. It makes the pictures a consistent size, the text readable, and everything line-up right. Copy and paste it into the CSS window on your codepen project.

###Finally the Javascript
Javascript is what makes the web interactive. We use it to put away some images and add others. It updates the text when you make a decision with a button. You might remember that variable are just containers to store information. In javscript, when you are setting a variable to remember some information for you, you use the keyword 'var'. To get started, copy and paste these variables into the 'JS' window of your project:

<script src="https://gist.github.com/anonymous/ee2d6961623662909039.js"></script>

You might have noticed that several of those match the 'ids' of our html elements: images, text, input, and buttonBox. We are giving our script a way to remember those elements so that we can do stuff to them with functions later. You will see them again.

A function is a neat little package of instructions that we know we are going to need. Functions help keep our code organized and especially help us not to have to type the same instructions over and over again. Remeber what we said about not repeating ourselves? The first function helps us to get some information from our game's player. We are asking them to name the in-game dog. Read the code, think about how it might work, and copy and paste it into your JavaScript.

<script src="https://gist.github.com/anonymous/949873aa46ebda5af767.js"></script>

Here are three functions which will save us lots of time by changing text, pictures, and buttons on the screen, don't forget to add it to your code:

<script src="https://gist.github.com/anonymous/df66b53e8682b24ef70b.js"></script>

Can you see how it is going to save us time as we advance through scenes in the game? The last bit is an object. We are using it to organize all the level or 'scenario' data. When a function needs to show the image for scenario number 4, it looks it up in the object. Makes since, right?

<script src="https://gist.github.com/anonymous/6c10d54b959975302da0.js"></script>

That last little bit gets us started with level one. Have fun! Make changes!

The full code is available here [on Codepen](http://codepen.io/thehack/pen/QwdvEa).











