class WelcomeController < ApplicationController
  def index
    @item = Pack.new
    p @item
  end
end
