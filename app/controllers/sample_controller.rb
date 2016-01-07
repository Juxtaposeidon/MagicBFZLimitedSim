class SampleController < ApplicationController
  def index
    @@pack = []
    6.times do
      @@pack << Pack.new.contents
    end
    @@pack.flatten!
    @@pack.sort_by!{|card| [card.color, card.name]}
    @@pack.each_with_index do |card,place|
      if card.color2 != nil
        placeholder = card
        @@pack.delete_at(place)
        @@pack.push(placeholder)
      end
    end
    @pack = @@pack
  end

  def addcard
    pickedcard = Card.find(params[:id])
    @@pack.delete_at(@@pack.find_index(pickedcard))
    p @@pack
    @pack = @@pack
    render :json => {
      :partial => render_to_string(:partial => 'sample/sealed')
    }

  end

end
