class FavoriteItem < ApplicationRecord
	belongs_to :favorite

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

  def item_tour
    find_item_tour()
  end

  private
  
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
    when 'ActiveTour'
      ActiveTour.find(self.product_id)
    when 'Boat'
      Boat.find(self.product_id)
    when 'Shop'
      Shop.find(self.product_id)
    when 'StaticPage'
      StaticPage.find(self.product_id)
    end
  end
end
