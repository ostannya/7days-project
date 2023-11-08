# 7days-project

A repo for the projects I write in 7 days. Created with `create-react-app` and `react-router-dom`, uses `ant design` for UI.

## TODO

-   [ ] Add UTF-8
-   [ ] Fix count on the button

## Inspiration

1. Poke API https://unpkg.com/css-chain-test@1.1.9/src/PokeApi-Explorer.html
2. 40 projects for beginners https://www.freecodecamp.org/news/javascript-projects-for-beginners/
3. https://www.florin-pop.com/blog/2019/09/100-days-100-projects/
4. https://github.com/florinpop17/app-ideas
5. How many string methods can you remember
6. Sketch pad
7. Log in to something

## Running a project

Project runs by `npm start` on [http://localhost:3000](http://localhost:3000).

## Projects

-   Poké Tac Toe: play popular strategy game with Pokémon. Choose from six different characters!
-   ToAnyCase(): set of tools for daily work with text. No ads, no tracking, no... whatever?

## Insights

1. Getting the winner in tic tac toe didn't work as expected, because I was trying to check `===` on two objects. Solutions: compare properties; stringify objects and compare strings causes `Converting circular structure to JSON` error - use `JSON.stringify` with replacer function to avoid circular structure error.

## Bugs

1. Poké Tac Toe: when you click on the board with no char chosen, a cell is visually empty but marked as occupied.
2. toAnyCase(): when you click on the Count button, the counter doesn't increment/decrement when the input value changes. It only changes in dropdown menu.
