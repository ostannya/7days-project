# 7days-project

A repo for the projects I write in 7 days. Created with `create-react-app` and `react-router-dom`, uses `ant design` for UI.

## TODO

-   [ ] Fix buttons layout
-   [ ] Use char choice to play

## Inspiration

1. Poke API https://unpkg.com/css-chain-test@1.1.9/src/PokeApi-Explorer.html
2. 40 projects for beginners https://www.freecodecamp.org/news/javascript-projects-for-beginners/
3. https://www.florin-pop.com/blog/2019/09/100-days-100-projects/
4. https://github.com/florinpop17/app-ideas

## Running a project

Project runs by `npm start` on [http://localhost:3000](http://localhost:3000).

## Projects

-   Poké Tac Toe: play strategy game with Pokémon. Choose from six different characters!

## Insights

1. Getting the winner in tic tac toe didn't work as expected, because I was trying to check `===` on two objects. Solutions: compare properties; stringify objects and compare strings causes `Converting circular structure to JSON` error - use `JSON.stringify` with replacer function to avoid circular structure error.
