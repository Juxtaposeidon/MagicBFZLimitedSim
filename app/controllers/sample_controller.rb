class SampleController < ApplicationController
  def new
    @pack = []
    6.times do
      @pack << Pack.new.contents
    end
    @pack.flatten!.sort_by!{|card| [card.color, card.name]}
  end
end
