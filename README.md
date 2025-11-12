# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Macbook solution](./solution/Macbook-Air-127.0.0.1.png)

### Links

- Solution URL: [Github page](https://github.com/EkoNdongAyecaba/newsletter-sign-up-with-success-message)
- Live Site URL: [Live Site](https://ekondongayecaba.github.io/newsletter-sign-up-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flex
- Mobile-first workflow

### What I learned

I learned how to use local fonts:

```css
@font-face {
  font-family: "Roboto";
  font-weight: 700;
  src: local("Roboto Bold"), url("assets/fonts/Roboto-Bold.ttf");
}
```

I learned too some pretty new **css** property, as a way to change the `h s l`values from a color with:

```css
background: linear-gradient(
  to right,
  hsl(from var(--clr-primary) calc(h + 344) calc(s + 16) calc(l - 9)),
  hsl(from var(--clr-primary) calc(h + 10) calc(s + 16) calc(l - 14))
);
```

Where `from`take a color and increase or decrease the `h s l`values using the `calc(h + a)`

### Continued development

In the future i might try to do my sites with dark theme available to make them even more perfect

### Useful resources

- [Midudev](https://www.youtube.com/watch?v=iTjkiI8QQsM) - This helped me to find the grid setup i needed
- [AlexCG Design
  ](https://www.youtube.com/watch?v=uHndgYKvGgw) - He helped me to understand the nesting CSS

## Author

- Frontend Mentor - [@EkoNdongAyecaba](https://www.frontendmentor.io/profile/EkoNdongAyecaba)
