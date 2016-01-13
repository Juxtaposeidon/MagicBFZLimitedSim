class DraftController < ApplicationController
  def new
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
  end

  def index
    @pack = @@newdraft.player1.currentpack.contents
    pickedcard=@@newdraft.player1.pool.last
    render :json => {
      :cardname => "<span class = 'card #{pickedcard.color} #{pickedcard.color2}' id = '#{pickedcard.id}'>" + pickedcard.name + "</span>",
      :partial => render_to_string(:partial => 'draft/draft')
    }
  end

end
