class Player
  attr_reader :pack1, :pack2, :pack3
  def initialize
    @pack1 = Pack.new
    @pack2 = Pack.new
    @pack3 = Pack.new
  end
end
