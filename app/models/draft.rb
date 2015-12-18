class Draft
  attr_reader :player1, :player2, :player3, :player4, :player5, :player6, :player7, :player8, :cpuplayers, :allplayers
  def initialize
    @player1, @player2, @player3, @player4, @player5, @player6, @player7, @player8 = 8.times.map {Player.new}
    @cpuplayers = [@player2, @player3, @player4, @player5, @player6, @player7, @player8]
    @allplayers = [@player1, @player2, @player3, @player4, @player5, @player6, @player7, @player8]
  end

  def rotatePacks
    packs = []
    packs = 8.times.map {|x| @allplayers[x].currentPack}.rotate
    p packs
    @allplayers.each_with_index {|player, index| player.receivePack(packs[index])}
  end

end
