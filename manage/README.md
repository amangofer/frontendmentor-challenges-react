# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

<img src="./src/assets/screenshot.png" width="400">

### Links

- Solution URL: [Code](https://github.com/amangofer/frontendmentor-challenges-react/tree/main/manage)
- Live Site URL: [Live](https://manage-42.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

### What I learned

I learned how to streamline SVG management by integrating `vite-plugin-svgr`. Unlike the default Vite behavior that imports SVGs as static URLs, this plugin allowed me to:

- **Transform SVGs into React Components**: Import SVG files directly as reusable components using the `?react` suffix.
- **Dynamic Styling**: Pass props like `className`, `fill`, and `stroke` directly to SVG components for easy CSS and Tailwind integration.
- **TypeScript Integration**: Configure type definitions in `vite-env.d.ts` to ensure full IDE support and type safety for SVG props.

### Useful resources

## Author

- Frontend Mentor - [@amangofer](https://www.frontendmentor.io/profile/amangofer)
