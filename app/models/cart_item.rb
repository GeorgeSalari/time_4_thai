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

  def update_cart_item(params)
    self.update(cart_item_params(params) )
  end

  private
  def cart_item_params(params)
    {adult_count: params[:adult_count], child_count: params[:child_count], booking_date: params[:booking_date]}
  end

  def find_item_tour
    case self.product_type
    when 'SeaTour'
      SeaTour.find(self.product_id)
    when 'LandTour'
      LandTour.find(self.product_id)
    when 'EveningShow'
      EveningShow.find(self.product_id)
    when 'PhuketTour'
      PhuketTour.find(self.product_id)
    when 'AviaTour'
      AviaTour.find(self.product_id)
    when 'Boat'
      Boat.find(self.product_id)
    end
  end
end
