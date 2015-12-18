class Draft
  attr_reader :player1, :player2, :player3, :player4, :player5, :player6, :player7, :player8, :cpuplayers
  def initialize
    @player1, @player2, @player3, @player4, @player5, @player6, @player7, @player8 = 8.times.map {Player.new}
    @cpuplayers = [@player2, @player3, @player4, @player5, @player6, @player7, @player8]
  end
end
