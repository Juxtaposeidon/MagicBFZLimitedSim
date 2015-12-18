class Draft
  attr_reader :player1, :player2, :player3, :player4, :player5, :player6, :player7, :player8,
  def initialize
    @player1, @player2, @player3, @player4, @player5, @player6, @player7, @player8 = 8.times.map {Player.new}
  end
end
