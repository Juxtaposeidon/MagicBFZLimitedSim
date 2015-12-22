class Player
  attr_reader :pool, :currentpack, :colorpool, :color1, :color2
  def initialize
    @pool = []
    @currentpack = Pack.new
    @colorpool = Hash.new(0)
    @color1
    @color2
  end

  def openPack
    @currentpack = Pack.new
  end

  def addPool(card)
    @pool << card
    if card.color != "Colorless"
      @colorpool[card.color] += (1 * card.rank)
    end
    if card.color2 != nil
      @colorpool[card.color2] += (1 * card.rank)
    end
  end


  def removeCard(card)
    @currentpack.contents.delete(card)
  end

  def cpuChoose
    choicecard = @currentpack.contents.sort_by{|card| card.rank}.reverse[0]
    addPool(choicecard)
    removeCard(choicecard)
  end

  def receivePack(newpack)
    @currentpack = newpack
  end

  def showPool
    p @colorpool
    pickColor
  end

  def pickColor
    @color1 = @colorpool.sort_by{|k,v| v}.reverse[0][0]
    @color2 = @colorpool.sort_by{|k,v| v}.reverse[1][0]
    p @color1, @color2
  end

end
