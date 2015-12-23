class Player
  attr_reader :pool, :currentpack, :colorpool, :color1, :color2
  def initialize
    @pool = []
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
      highvalue = @currentpack.contents.max_by{|card| card.rank}.rank
      choicecard = @currentpack.contents.select{|card| card.rank == highvalue}.sample
    else
      pickColor
      opencards = @currentpack.contents.partition {|card| onColor(card)}
      if opencards[0].length > 0
        highvalue = opencards[0].max_by{|card| card.rank}.rank
        choicecard = opencards[0].select{|card| card.rank == highvalue}.sample
      else
        highvalue = opencards[1].max_by{|card| card.rank}.rank
        choicecard = opencards[1].select{|card| card.rank == highvalue}.sample
      end
    end
    addPool(choicecard)
    removeCard(choicecard)
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
  end

  def onColor(card)
    card.color == @color1 || card.color2 == @color1 || card.color == @color2 || card.color2 == @color2 || card.color == "Colorless"
  end
end
