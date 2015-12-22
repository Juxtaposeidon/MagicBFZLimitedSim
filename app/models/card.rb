class Card < ActiveRecord::Base
    scope :rares, -> {where("rarity = ?", "Rare")}
    scope :uncommons, -> {where("rarity = ?", "Uncommon")}
    scope :commons, -> {where("rarity = ?", "Common")}
    scope :mythics, -> {where("rarity = ?", "Mythic Rare")}
    scope :colorpick, -> (id, id2=nil) { where(:color => [id, id2]) }

end
