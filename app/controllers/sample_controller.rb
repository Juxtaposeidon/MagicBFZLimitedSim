class SampleController < ApplicationController
  def index
    @pack = []
    6.times do
      @pack << Pack.new.contents
    end
    @pack.flatten!
    @pack.sort_by!{|card| [card.color, card.name]}
    @pack.each_with_index do |card,place|
      if card.color2 != nil
        placeholder = card
        @pack.delete_at(place)
        @pack.push(placeholder)
      end
    end
  end
end
