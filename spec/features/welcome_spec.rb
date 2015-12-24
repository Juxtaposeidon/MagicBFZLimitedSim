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

describe "Draft" do
  it "load the draft page successfully" do
    visit '/'
    click_on "Start draft"
    expect(page).to have_content("Battle for Zendikar Draft")
  end

  it "should add a card to the card pool", js: true do
    visit draft_new_path
    first("img").click
    page.should have_css('span.card')
  end

end