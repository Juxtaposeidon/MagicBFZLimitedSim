class DraftController < ApplicationController
  def index
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
    @pack2 = @@newdraft.player2.pool
    @pack8 = @@newdraft.player8.pool

    p @@newdraft.player2.colorpool
    p @@newdraft.player2.color1
    p @@newdraft.player2.color2

    p @@newdraft.player8.colorpool
    p @@newdraft.player8.color1
    p @@newdraft.player8.color2

    render :json => {
      :cardname => "<span class = 'card #{pickedcard.color} #{pickedcard.color2}' id = '#{params['id']}'>" + pickedcard.name + "</span>",
      :partial => render_to_string(:partial => 'draft/draft')
    }

  end

end
