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
        :pack => @pack,
        :partial => render_to_string(:partial => 'draft/draft')
      }
    # respond_to do |format|
    #   format.js
    # end
  end

end
