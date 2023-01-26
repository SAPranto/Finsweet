# This Is A Landing Page Created With React.JS

This page is not responsive. It is created for an assesment and it was created as per the figma design. Though I add a little bit extra functionalities but I didn't make the website reposnsive because it was not included.

## Navbar

The Navbar created here is fully reusable. The Navbar component takes in an array of objects as a prop, each object representing a navigation item. The component maps over the array and creates a list item for each object, with a Link component linking to the specified 'link' value in the object. The Donate button is also added to the Navbar, which can be used for any desired action.
The Link components have a text-decoration of none and change font-weight when focused
The Navbar is not responsive and is designed to be used with a fixed width layout.

## Footer

A reusable footer component for a website. It contains a logo, navigation menu, and a subscription form. The Footer component does not take any props. 
The Footer component contains a logo with a fixed width and height.
It also contains 3 navigation menus, each with 4 list items.
The last section of the footer is a subscription form that allows users to enter their email and subscribe to updates.
When the form is submitted, it logs the email to the console.

## Banner

The Banner component is a reusable component that displays a banner with an image, title, subtitle, and text. It also includes a "Donate now" button. The component is built using React.js and CSS.

The Banner component accepts several props:

title: The title of the banner
subtitle: The subtitle of the banner
text: The text of the banner
image: The image to be displayed on the banner
The bnr-container class is used to display the banner, the banner class contains the title, subtitle, text and button. The image class is used to display the image. The grn-btn class is used to style the "Donate now" button and border-left class is used to create a border-left effect.

The component is built using React.js and CSS. It is easy to use and fully customizable, allowing developers to easily change the text, images, and other properties of the banner as needed.

## Body

The Body component is a React component that displays the main content of the webpage. It includes a left-column that displays a heading and a paragraph, a tab-container that displays different sections of content based on the active tab, and a lower-body that displays a heading and two paragraphs.

The tab-container includes three tabs: Overview, Impact, and What You Get. Each tab has its own text content that is displayed when the tab is active. The component uses state to keep track of the active tab, and handleTabClick function to change the active tab when a user clicks on a tab.

The component also includes an image-container that displays an image and overlays a text on top of the image. The image-container also includes two buttons that allow users to join as a volunteer or donate.

## Built With
React - JavaScript library for building user interfaces
React-Router-Dom - Routing Library For React.JS
NPM - Package manager for JavaScript

## Author

Shihab Ahmed Pranto - SAPranto