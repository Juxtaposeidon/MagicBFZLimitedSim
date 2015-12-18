class DraftController < ApplicationController
  def new
    @newdraft = Draft.new
    @startingpack = @newdraft.player1.pack1.contents
    @cpu = @newdraft.cpuplayers
  end

end
