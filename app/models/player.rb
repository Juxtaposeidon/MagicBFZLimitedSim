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
    if @pool.length < 15
      choicecard = @currentpack.contents.sort_by{|card| card.rank}.reverse[0]
      addPool(choicecard)
      removeCard(choicecard)
    else
      pickColor
      opencards = @currentpack.contents.partition {|card| onColor(card)}
      if opencards[0].length > 0
        addPool(opencards[0].sort_by{|card| card.rank}.reverse[0])
        removeCard(opencards[0].sort_by{|card| card.rank}.reverse[0])
      else
        addPool(opencards[1].sort_by{|card| card.rank}.reverse[0])
        removeCard(opencards[1].sort_by{|card| card.rank}.reverse[0])
      end
    end

  end

  def receivePack(newpack)
    @currentpack = newpack

  end

  def showPool
    p @colorpool
  end

  def pickColor
    @color1 = @colorpool.sort_by{|k,v| v}.reverse[0][0]
    @color2 = @colorpool.sort_by{|k,v| v}.reverse[1][0]
    p @color1, @color2
  end

  def onColor(card)
    card.color == @color1 || card.color2 == @color1 || card.color == @color2 || card.color2 == @color2 || card.color == "Colorless"
  end
end
