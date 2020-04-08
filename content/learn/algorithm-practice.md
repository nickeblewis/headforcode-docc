---
description: ''
sidebar: 'learn'
prev: '/learn/algorithm-definition'
next: '/learn/javascript/'
---

### Putting into practice

Going back to our list of unordered names, we now want to sort them! One way we can tackle this particular problem is as follows:

```js
// The initial un-sorted list of names
var names = ['Tom', 'Angela', 'Zach', 'Jennifer', 'Rupert']; 

// We can use javascript's Array.sort() function
var sortedNames = names.sort();

// Output = Angela, Jennifer, Rupert, Tom, Zach
console.log(sortedNames);
```

- We have chosen to store the unordered values in an ``array`` variable called ``names``
- We use the ``Array.sort()`` function to carry out the sort and to store the outcome in a second new variable called ``sortedNames``
- Log the output to the browser ``console``

However it's better to go a step or more further by illustrating how you can use Javascript to introduce interactivity to a web page. The next example shows how this can be achieved:

```html
<!DOCTYPE html>
<html>
<body>

<p>Click the button to sort the array.</p>

<button onclick="nameSort()">Try it</button>

<p id="staff"></p>

<script>
var names = ["Tom", "Angela", "Zach", "Jennifer", "Rupert"];
document.getElementById("staff").innerHTML = names;

function nameSort() {
  names.sort();
  document.getElementById("staff").innerHTML = names;
}
</script>

</body>
</html>
```

The second example builds on the first by fully introducing user interactivity to the page, you first of all see the list in a jumble and clicking the button rearranges the people's names right before your eyes.

It introduces some more concepts here and in particular the DOM (Document Object Model) which we can directly manipulate with Javascript. Here we combine HTML and JS into one single file. 

- We have introduced a button that an be interacted with through the use of DOM events, such as in this case we trigger the javascript function ``onclick()``.
- We then sort the data as we did earlier but now we also inject the output back in to the page via the function ``getElementById()`` and ``innerHTML``
- This in turn updates the content to show in the correct order

We could have also solved this using a classic bubble-sort to process our input, as shown in the following:

### An alternative

https://codepen.io/nickeblewis/pen/GRpKdep