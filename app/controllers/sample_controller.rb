class SampleController < ApplicationController
  def index
    @@pack = []
    6.times do
      @@pack += Pack.new.contents
    end
    @@pack.sort_by!{|card| [card.color, card.name]}
    # multiholder = []
    # @@pack.each do |card|
    #   if card.color2 != nil
    #     multiholder << card
    #   end
    # end
    # @@pack.delete_if {|card| card.color2 != nil}
    # @@pack += multiholder
    @@pack = @@pack.partition {|card| card.color2 != nil}
    @@pack.flatten!
    @pack = @@pack
  end

  def addcard
    pickedcard = Card.find(params[:id])
    @@pack.delete_at(@@pack.find_index(pickedcard))
    p @@pack
    @pack = @@pack
    render :json => {
      :partial => render_to_string(:partial => 'sample/sealed'),
      :cardname => "<li><span class = 'card #{pickedcard.color} #{pickedcard.color2}' id = '#{params['id']}'>" + pickedcard.name + "</span></li>"
    }
  end

end
