# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [I will post ](https://your-solution-url.com)
- Live Site URL: [I will post](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript Vanilla
- Mobile-first workflow

### What I learned

I've been practicing using Vanilla JS, and with this project, I managed to make the validation of inputs much more dynamic, making it easier to maintain and add new fields if needed, and also using forEach.

```js
function validateOnInput() {
  inputsToValidate.forEach((input) => {
    const inputRef = document.querySelector(`#${input.id}`);
    isSubmited = true;
    inputRef.addEventListener("blur", validate.bind(inputRef, input));
  });
}
```

It was really fun to do the validation without having to select each input one by one, and it allowed me to test my skills in Vanilla JS.

## Author

- Linkedin - [Douglas Queiroz](https://www.linkedin.com/in/douglas-queiroz/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/douglasliman)
- Instagram - [@douglas.liman](https://www.instagram.com/douglas.liman/)
