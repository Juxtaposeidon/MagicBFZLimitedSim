class DraftController < ApplicationController
  def new
    session[:cards] = []
        p session[:cards]
    @@newdraft = Draft.new
    @startingpack = @@newdraft.player1.pack1.contents
  end

  def addcard
    @@newdraft.player1.addPool(Card.find(params['id']))

    @@newdraft.player1.removeCard(Card.find(params['id']))
    # p @@newdraft.player2.pack1.contents
    @@newdraft.player2.cpuChoose
    # p @@newdraft.player2.pack1.contents

  end

end
