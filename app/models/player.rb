class Player
  attr_reader :pool, :currentpack, :colordepth, :color1, :color2, :colorcount
  def initialize
    @pool = []
    @colordepth = Hash.new(0)
    @colorcount = Hash.new(0)
    @color1
    @color2
  end

  def openPack
    @currentpack = Pack.new
  end

  def addPool(card)
    @pool << card
    @colorcount[card.color] += 1
    if card.color != "Colorless"
      @colordepth[card.color] += card.rank
    end
    if card.color2 != nil
      @colordepth[card.color2] += card.rank
      @colorcount[card.color2] += 1
    end
  end

  def removeCard(card)
    @currentpack.contents.delete(card)
  end

  def cpuChoose
    if @pool.length < 8
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

  def pickColor
    @color1 = @colordepth.sort_by{|k,v| v}[@colordepth.length-1][0]
    @color2 = @colordepth.sort_by{|k,v| v}[@colordepth.length-2][0]
  end

  def onColor(card)
    card.color == @color1 || card.color2 == @color1 || card.color == @color2 || card.color2 == @color2 || card.color == "Colorless"
  end
end
