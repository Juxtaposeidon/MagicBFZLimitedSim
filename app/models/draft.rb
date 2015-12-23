class Draft
  attr_reader :player1, :player2, :player3, :player4, :player5, :player6, :player7, :player8, :cpuplayers, :allplayers

  def initialize
    @player1, @player2, @player3, @player4, @player5, @player6, @player7, @player8 = 8.times.map {Player.new}
    @cpuplayers = [@player2, @player3, @player4, @player5, @player6, @player7, @player8]
    @allplayers = [@player1, @player2, @player3, @player4, @player5, @player6, @player7, @player8]
      newPacks

  end

  def rotatePacks
    if @player1.pool.length < 15 || @player1.pool.length > 28
      @packs = @packs.rotate
    else
      @packs = @packs.rotate(-1)
    end
    @allplayers.each_with_index {|player, index| player.receivePack(@packs[index])}
  end

  def newPacks
    @packs = 8.times.map {Pack.new}
    @allplayers.each_with_index {|player, index| player.receivePack(@packs[index])}
  end


end
