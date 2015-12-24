class FullsetController < ApplicationController
  def index
    @cards = Card.all
    @cards.sort_by {|card| card.color}
  end
end
