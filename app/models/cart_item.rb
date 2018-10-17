class CartItem < ApplicationRecord
  belongs_to :cart

  def item_image
    find_item_tour().images.first.url(:bottom)
  end

  def item_title
    find_item_tour().title
  end

  def adult_price
    find_item_tour().adult_price
  end

  def child_price
    find_item_tour().child_price
  end

  private
  def find_item_tour
    case self.product_type
    when 'SeaTour'
      SeaTour.find(self.product_id)
    end
  end
end
