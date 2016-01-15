# Magic the Gathering Limited Simulator: Battle for Zendikar

This is a Rails app that simulates the draft and sealed play modes for Magic the Gathering. For drafts, users can pick their cards alongside seven artificial opponents to build a formidable deck. For the sealed portion, the app displays a pool of six opened packs from which the user can choose cards.

![Draftscreen](/app/assets/images/mtgdrafter.png)

# Game Instructions

The basic gist of a Magic draft is that players each start with three booster packs. After opening up the first pack, a player chooses the "best" card in it and passes the remaining cards to the left. Once the player receives the next pack of cards from the right, the player chooses another card from the pool and passes the remainder to the left. The process repeats itself until no more cards are left in the first round. This goes on for two more rounds; however, card packs are passed to the right in the second round after each pick. In the third and last round, card packs go to the left.

More detailed rules can be found here: http://archive.wizards.com/Magic/magazine/article.aspx?x=mtg/daily/li/272

Sealed magic is a bit simpler. You open up six packs and construct the best minimum-40 card deck possible.

For both modes, basic lands are provided on the side and do not cost any draft picks.

# Demo

An online demo is available at http://bfz.herokuapp.com/ 

# Features

* Users can experience an unlimited number of draft and sealed pool simulations.

* Features full art and card set from the Battle for Zendikar expansion.

* Users can review their draft and sealed card choices after they make them.

* Draft simulation opponents make educated picks in the draft using card rankings and color balancing.

# Installation

Clone this repo onto your desktop and run `bundle install` to retrieve the necessary gems.

  ```
  git clone https://github.com/Juxtaposeidon/MagicDrafter.git
  bundle install
  ```

After installing the gems, you need to set up the database and import all the app's cards via seed file.

  ```
  rake db:create
  rake db:migrate
  rake db:seed
  ```
# Usage

After cloning the repo and installing the gems, you can run `rails s` to start your local server. The app can then be accessed at http://localhost:3000

# Development

* The opponent algorithm for picking cards is still in the works. As it stands, the computer picks the highest value card in each pack at the start of the draft. Once each computer has seven cards chosen, it starts to pick the best cards the colors it is deepest in.

# License

This project is licensed under the terms of the MIT license: https://github.com/IgorAntun/node-chat/blob/master/LICENSE.md

