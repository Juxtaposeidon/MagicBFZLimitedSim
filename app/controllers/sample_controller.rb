class SampleController < ApplicationController
  def new
    @pack = Pack.new
  end

end
