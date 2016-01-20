class FullsetController < ApplicationController
  def index
    @cards = Card.where(color2: nil)
    @cards = @cards.sort_by{|card| [card.color, card.name]}
    @multicolorcards = Card.where.not(color2: nil)
    @multicolorcards = @multicolorcards.sort_by{|card| [card.color, card.name]}
  end
end
