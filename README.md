# ECommerce speedrun
-----------------------

Sales Pitch of project:
YOUR SPEED WILL DETERMINE YOUR RESULTS! SPEEDRUN YOUR WAY TO VICTORY with OUR new game; FASTGAME! An eCommerce speedrun game! Featuring; A website with the combination of a game with the themes of an eCommerce site. Race against time and compete with other players to get the best time! Do tasks! Add items to the shopping cart! Complete the shopping list! And click your way to victory! What's more? Win attractive prizes when you make it onto the leaderboard!

Features:
- A start page for the game
- A catalog page with products
- A product description page (Zoomed in view of product)
- A shopping cart page
- A end of game page
- Users can search for the products they want
- Users can select multiple tags to filter items
- Modal for profile and shopping list
- Timer for the game
- Restart button for the game
- End game button
- 404 Page

Future Features:
- Add more variations of products and pictures
- Allow the user to change the theme of the website
- New difficulty levels
- Add transition or loading pages
- Able to change the colour of the product and customization
- Login and signup system
- Promocode for checkout
- Instruction on how to play the game
- Add the ability to add comments

-----------------------

Flow of webpage:
- When users access the website, they would be greeted with a start game page where they would be introduced to the game mechanics and press a start button when ready.
- We made this page so that when the user loads the webpage, the timer does not start counting. We want the user to understand the game and be ready before proceeding.
- Upon pressing start, the user would be transferred to the main catalog page where a the game starts and a timer would appear at the corner of the screen.
-  Gameplay
- Users would refer to the shopping cart as a task list of the products to buy
- Users would then go search for the product on the website and add it to cart as quickly as possible
- Users would then proceed to checkout by clicking on the button with a shopping icon and the number of items they have in the cart where they would be able to check the products they have bought, enter in details and press a finish button to end the game.
- Once user ends the game the timer and score would be calculated based on their accuracy of their purchases and the time remaining.
- The score would be displayed and the user can enter their names in a small box to be shown on a scoreboard after the user presses proceed.
- Players can view the scoreboard and try another round at the game
- At the end of the game, users can convert their scores into points to redeem rewards for other ecommerce sites (E.g Lazada, Google Play, Amazon, Zalora, PayPal Gift cards)
  
-----------------------

Technologies:
- HTML for placing content on website
- CSS for customizing the appearance of the website
- JS for the API implementation
- BootStrap for easier organization and design of the website
- Lottie for animations
- Figma for wireframe to plan the layout of the website.

-----------------------
Testing:

Scenario 1: Adding items to cart
1. Press play now button
2. Find any item in the catalog or search page
3. Press add to cart
4. Press checkout button
5. Check whether item has been added

Scenario 2: Test point and score system
1. After starting the game, buy some items that are required in the shopping list
2. Add to cart and checkout
3. Check whether score adds up coorectly with what the user typed in the form and the products they have selected with the data in the API
4. Check whether players can only redeem prizes that are equal to or below their points
5. Check whether scored has been displayed correctly and in descending order in the leaderboard

Scenario 3: Lottie animations and wrong subquery requests
1. When loading the game after pressing play now or leaderboard page, check that the lottie appears and is working correctly
2. When user tries to enter a subquery from the url bar, check that incorrectly typed subqueries would redirect them to a 404 page.

Scenario 4: Test filters and hover animations
1. Hover mouse over buttons and elements such as cards that have bootstrap or css hover animations and check if colour or size changes occur
2. Select multiple filters in the catalog or search page and check if the products filtered are correct according to the catgories selected.
3. Use the search bar and search for a particular item, check if the item appears.
   
Bugs:
- Fixed the exploit where users could access any page without starting the game by forcing them to the index page if they tried to enter the url manually
- Fixed buttons positioning when viewport was decreased even with proper media rules implementation
- Total price of products bought did not add up and only the subtotal of the first product in the cart was added
- Fixed timer that did not work in the search page
- Fixed some bootstrap icons that were not appearing
- Lottie animations and text were not appearing correctly in the index page at 768px viewport
- Home button in active state even though user clicked on another page (Button not properly greyed out)
- Fixed number of sales does not appear for products under the popular tag in catalog page
- Product Category appears as undefined in the shopping list
- Error 400 BadRequest when posting data to restDB
- Time appearing in ISO format instead of minutes and seconds only
- Google chrome display certain elements with the wrong css e.g(wrong width)
- Button-primay color sometimes revert back to its original color
- Small chance of getting stuck in the loading page when pressed the play now button

-----------------------
GitHub Link

Link for website: https://leoyuntao.github.io/IDAssignment2/

-----------------------

Credits
Coding
- Microsoft Visual Studio Code ~ Software to code the HTML, CSS, JS
- GitHub ~ Source version control and commits
- W3Schools and StackOverflow for further learning
- [Boostrap](https://getbootstrap.com/) for documentation, syntax, CSS and icon libraries
- [Google](https://fonts.google.com/) for Roboto and Poppins font

Media
- [Pixabay](https://pixabay.com/) for all images and API used in the website
- [Lottie](https://lottiefiles.com/) for all lottie animations
- [Iconfinder](https://www.iconfinder.com/social-media-icons) for social media and credit card icons

Acknowledgements
- [StackOverflow](https://stackoverflow.com/) for learning
- [Dribble](https://dribbble.com/) for design inspirations

-----------------------
