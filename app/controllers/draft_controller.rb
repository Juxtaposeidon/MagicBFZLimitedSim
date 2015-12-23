class DraftController < ApplicationController
  def new
    @@newdraft = Draft.new
    @startingpack = @@newdraft.player1.currentpack.contents
    @pack2 = @@newdraft.player2.currentpack.contents
    @pack8 = @@newdraft.player8.currentpack.contents
  end

  def addcard
    pickedcard = Card.find(params['id'])
    @@newdraft.player1.addPool(pickedcard)
    @@newdraft.player1.removeCard(pickedcard)
    # p @@newdraft.player2.pack1.contents
    @@newdraft.cpuplayers.each {|player| player.cpuChoose}
    @@newdraft.rotatePacks
    if @@newdraft.player1.pool.length % 14 == 0
      @@newdraft.newPacks
    end
    @pack = @@newdraft.player1.currentpack.contents
    @pack2 = @@newdraft.player2.currentpack.contents
    @pack8 = @@newdraft.player8.currentpack.contents
    render :json => {
      :cardname => "<span class = 'card #{pickedcard.color} #{pickedcard.color2}' id = '#{params['id']}'>" + pickedcard.name + "</span>",
      :partial => render_to_string(:partial => 'draft/draft')
    }

  end

end
