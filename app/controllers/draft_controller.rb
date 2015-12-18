class DraftController < ApplicationController
  def new
    @@newdraft = Draft.new
    @startingpack = @@newdraft.player1.pack1.contents
  end

  def addcard
    @@newdraft.player1.addPool(Card.find(params['id']))

    @@newdraft.player1.removeCard(Card.find(params['id']))
    # p @@newdraft.player2.pack1.contents
    @@newdraft.cpuplayers.each {|player| player.cpuChoose}
    p "PLAYER2"
    p @@newdraft.player2.pack1.contents

    @@newdraft.rotatePacks
    p "PLAYER 2 now player 1"
    p @@newdraft.player1.currentPack.contents

  end

end
