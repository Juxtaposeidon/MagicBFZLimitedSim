class SealedController < ApplicationController
  def index
    @@pack = []
    6.times do
      @@pack += Pack.new.contents
    end
    @@pack.sort_by!{|card| [card.color, card.name]}
    multiholder = []
    @@pack.delete_if do |card|
      unless card.color2.nil?
        multiholder << card
        true
      end
    end
    @@pack += multiholder
    @pack = @@pack
  end

end
