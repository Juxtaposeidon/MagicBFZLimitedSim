class DraftController < ApplicationController
  def new
    session[:cards] = []
        p session[:cards]

    @newdraft = Draft.new
    @startingpack = @newdraft.player1.pack1.contents
    @cpu = @newdraft.cpuplayers
  end

  def addcard
    session[:cards] << Card.find(params['id'])
    p session[:cards]
  end

end
