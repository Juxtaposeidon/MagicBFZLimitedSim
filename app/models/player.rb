class Player
  attr_reader :pack1, :pack2, :pack3, :pool
  def initialize
    @pool = []
    @pack1 = Pack.new
    @pack2 = Pack.new
    @pack3 = Pack.new
  end

  def addPool(card)
    @pool << card
  end

  def currentPack
    if @pool.length <= 14
      pack = @pack1
    elsif @pool.length <= 28
      pack = @pack2
    else
      pack = @pack3
    end
    pack
  end

  def removeCard(card)
    currentPack.contents.delete_if {|item| item == card}
  end

  def cpuChoose
    removeCard(currentPack.contents.sort_by{|card| card.rank}.reverse[0])
  end

  def receivePack(newpack)
    if @pool.length <= 14
      @pack1 = newpack
    elsif @pool.length <= 28
      @pack2 = newpack
    else
      @pack3 = newpack
    end
  end

end
