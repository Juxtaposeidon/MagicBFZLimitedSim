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
