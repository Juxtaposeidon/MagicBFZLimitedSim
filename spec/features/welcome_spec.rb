require 'rails_helper'
Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

describe 'home page', js: true do
  it 'welcomes the user' do
    visit '/'
    page.should have_content('draft')
  end
end