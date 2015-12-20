class Player
  attr_reader :pool, :currentpack, :colorpool
  def initialize
    @pool = []
    @currentpack = Pack.new
    @colorpool = Hash.new(0)
  end

  def openPack
    @currentpack = Pack.new
  end

  def addPool(card)
    @pool << card
    if card.color != "Colorless"
      @colorpool[card.color] += 1
    end
    if card.color2 != nil
      @colorpool[card.color2] += 1
    end
  end

  def removeCard(card)
    @currentpack.contents.delete_if {|item| item == card}
  end

  def cpuChoose
    choicecard = @currentpack.contents.sort_by{|card| card.rank}.reverse[0]
    addPool(choicecard)
    removeCard(choicecard)
  end

  def receivePack(newpack)
    @currentpack = newpack
  end

end
