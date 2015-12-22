require 'rails_helper'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end


describe "Search", js: true do
    it "can search for something successfully" do
      visit root
      expect(page).to have_content("Welcome")
  end
end