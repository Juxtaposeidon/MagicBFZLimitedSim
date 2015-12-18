class DraftController < ApplicationController
  def new
    session[:cards] = []
        p session[:cards]
    @@newdraft = Draft.new
    @startingpack = @@newdraft.player1.pack1.contents
    @cpu = @@newdraft.cpuplayers
  end

  def addcard
    @@newdraft.player1.addPool(Card.find(params['id']))

    p @@newdraft.player1.pool
    @@newdraft.player1.removeCard(Card.find(params['id']))
  end

end
