class WelcomeController < ApplicationController
  def index
    @newdraft = Draft.new
  end
end
