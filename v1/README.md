# Guide for costumization of the website

## Headers
To be able to change the sizes of headers go to the [scss-variables.scss file](https://github.com/ivasco/Tangle-Offline-website/tree/feature/src/scss-variables.scss)  and scroll to the *header sizes* section. There you can set the sizes in pixels.
To change header sizes independently go to [the routes directory](https://github.com/ivasco/Tangle-Offline-website/tree/feature/src/routes/), choose the jsx file you want to edit and look for the specific header and change the **className** accordingly.

## Paragraphs
To be able to change the sizes of paragraphs go to the file src/scss-variable.scss and scroll to the *paragraph sizes* section. There you can set the sizes in pixels.

## Set language
Go to src/content.json and look for the language that you want to edit. <mark>Do not change</mark> the names  of the properties only the corresponding string without changing the property names in the code itself. The property names have to be the same throughout every language to have the content rendered.


