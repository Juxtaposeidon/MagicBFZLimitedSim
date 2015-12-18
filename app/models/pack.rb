class Pack
  def initialize
    @contents = [Card.commons.sample(10), Card.uncommons.sample(3)]
    if rand(7) == 1
      @contents << Card.mythics.sample
    else
      @contents << Card.rares.sample
    end
    @contents.flatten!
  end

  def content
    return @contents
  end
end
