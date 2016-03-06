class DraftsController < ApplicationController
  def new
    @@draft = Draft.new
    @cardpack = @@draft.player1.currentpack.contents
  end

  def update
    pickedcard = Card.find(params['cardid'])
    @@draft.player1.addPool(pickedcard)
    @@draft.player1.removeCard(pickedcard)
    @@draft.cpuplayers.each {|player| player.cpuChoose}
    @@draft.rotatePacks
    if @@draft.player1.pool.length % 14 == 0
      @@draft.newPacks
    end
  end

  def index
    if request.xhr?
      @pack = @@draft.player1.currentpack.contents
      pickedcard=@@draft.player1.pool.last
      if !pickedcard.color2
        pickedcard.color2 = ""
      end
      render :json => {
        :pick => pickedcard, :pack => @pack
      }
    else
      redirect_to new_draft_path
    end
  end

end
