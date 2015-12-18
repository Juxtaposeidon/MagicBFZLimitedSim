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

  def removeCard(card)
    p @pool.length
    if @pool.length <= 14
      @pack1.contents.delete_if {|item| item == card}
    end
    p @pack1.contents.length
    p @pack1.contents
  end
end
