# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
 require 'csv'
cards = CSV.read('bfz.csv')
cards.each do |item|
  Card.create(name: item[0], rarity: item[3], color: item[1], color2: item[2], rank: item[4])
end
