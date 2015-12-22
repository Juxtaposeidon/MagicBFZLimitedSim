class DraftController < ApplicationController
  def new
    @@newdraft = Draft.new
    @startingpack = @@newdraft.player1.currentpack.contents
    @pack2 = @@newdraft.player2.currentpack.contents
    @pack8 = @@newdraft.player8.currentpack.contents
  end

  def addcard
    @@newdraft.player1.addPool(Card.find(params['id']))
    @@newdraft.player1.removeCard(Card.find(params['id']))
    # p @@newdraft.player2.pack1.contents
    @@newdraft.cpuplayers.each {|player| player.cpuChoose}
    @@newdraft.rotatePacks
    @pack = @@newdraft.player1.currentpack.contents
    if @pack.length == 0
      @@newdraft.newPacks
      @pack = @@newdraft.player1.currentpack.contents
    end
    @pack2 = @@newdraft.player2.currentpack.contents
    @pack8 = @@newdraft.player8.currentpack.contents

     p  @@newdraft.player2.colorpool
      render :json => {
        :cardname => "<span class = 'card' id = '#{params['id']}'>" + Card.find(params['id']).name + "</span>",
        :cardid => Card.find(params['id']).id,
        :partial => render_to_string(:partial => 'draft/draft')
      }

  end

end
