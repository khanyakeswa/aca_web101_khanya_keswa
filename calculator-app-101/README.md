# Calculator App for 101

Inside this repo you'll find HTML, CSS, and JS files that come together to build a calculator. It's a simple & ugly calculator but it work as is to add and subtract two numbers. You have some tasks to do to get it into a prettier and more functional calculator.

1. Fork and clone it to your local machine in whatever folder you've been working in so far, i.e. `devFolder`
1. Open up the `index.html` file and uncomment line 7 so your JavaScript is connected to your HTML.
1. Now read the comments on line 13, 18, and 26. Then look over the code to see if you understand what is being built.
1. Use live-server or something similar to serve it and see what's happening in the browser.
1. Play. Type in two numbers then choose "add" or "subtract" and hit "equal" to see the results.
1. Go back to the `index.html` file and look at line 14 and 16. Do you see the `onkeyup` Event Listeners? Follow the function they call into the `main.js` file and see if you can figure out what and how they're doing what they're doing.
1. Checkout line 14 in the `main.js` file that tells you about the `parseInt()` function. This just make sure our numbers are numbers and not text.
1. Do you see where and how the numbers you typed in the input fields are being saved?
1. If so, go back to the `index.html` file and find the `onclick` event listeners on the operation buttons. What functions on they calling in the `main.js` file?
1. How is this function working? Break it down. Ask a friend. Ask a tutor. Ask your instructor. Make sure you understand what is happening in this function before moving on.
1. After that, make sure each of your `button`s have the same `onclick` attribute as the `add` and `subtract` buttons. Just copy/paste into each. This will allow your operations to be used!
1. Go back to the web page view of the Calculator and see how it's working. Try adding, subtracting, multiplying, dividing, and modulusing to see what's missing so you can fix it.

> *HINT: the comments throughout the code are left for you to read and learn from.*

## What's Missing?

1. Part 1: the multiply, divide, and modulus functions need to be built. Can you figure out how to build them and `console.log` their results?
1. Part 2: in the `equal` function at the bottom of the `main.js` file you'll see the first two cases call the `putResultInElement` function with their corresponding operation functions passed into it. But the next three don't. Can you fix that so that your results show up on the page and NOT the console?

### Push Yourself Further

1. This calculator is ugly. Once you've got the functionality working, can you make it look better with CSS Grid?

## To Turn This Assignment In

1. Since you forked this repo you'll need to `git status, add, commit, push` the same way you've done before but now you'll create a Pull Request (*PR*). 

  > *NOTE: A PR, is a request to merge your code changes into the original code base. This is what you'd normally do in your day job so that other can see the work you did for the day.*

1. Once you've made the PR you'll copy/paste the URL of the PR for your instructor to grade.

*******

<iframe src="https://player.vimeo.com/video/395247060" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
