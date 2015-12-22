require 'rails_helper'
Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

describe 'home page' do
  it 'welcomes the user' do
    visit '/'
    page.should have_content('draft')
  end
end

describe "Draft", js: true do
  it "load the draft page successfully" do
    visit '/'
    click_on "Start draft"
    expect(page).to have_content("Battle for Zendikar Draft")
  end
end