class DraftController < ApplicationController
  def index
    @@newdraft = Draft.new
    @startingpack = @@newdraft.player1.currentpack.contents
  end

  def update
    pickedcard = Card.find(params['cardid'])
    @@newdraft.player1.addPool(pickedcard)
    @@newdraft.player1.removeCard(pickedcard)
    @@newdraft.cpuplayers.each {|player| player.cpuChoose}
    @@newdraft.rotatePacks
    if @@newdraft.player1.pool.length % 14 == 0
      @@newdraft.newPacks
    end
    @pack = @@newdraft.player1.currentpack.contents
    render :json => {
      :cardname => "<span class = 'card #{pickedcard.color} #{pickedcard.color2}' id = '#{params['id']}'>" + pickedcard.name + "</span>",
      :partial => render_to_string(:partial => 'draft/draft')
    }
  end

end
