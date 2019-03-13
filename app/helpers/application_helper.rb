module ApplicationHelper
  def check_favorites_items(item)
    @favorite.favorite_items.find_by(product_id: item.product_id, product_type: item.product_type).nil?
  end

  def check_carts_items(item)
    @cart.cart_items.find_by(product_id: item.product_id, product_type: item.product_type).nil?
  end

  def transform_tour_type(type)
    case type
    when 'sea_tours'
      'SeaTour'
    when 'land_tours'
      'LandTour'
    when 'evening_shows'
      'EveningShow'
    when 'phuket_tours'
      'PhuketTour'
    when 'avia_tours'
      'AviaTour'
    when 'boats'
      'Boat'
    when 'shops'
      'Shop'
    when 'static_pages'
      'StaticPage'
    when 'SeaTour'
      'SeaTour'
    when 'LandTour'
      'LandTour'
    when 'EveningShow'
      'EveningShow'
    when 'PhuketTour'
      'PhuketTour'
    when 'AviaTour'
      'AviaTour'
    when 'Boat'
      'Boat'
    when 'Shop'
      'Shop'
    when 'StaticPage'
      'StaticPage'
    end
  end

  def bootstrap_class_for_flash(flash_type)
    case flash_type
    when 'success'
      'alert-success'
    when 'error'
      'alert-danger'
    when 'alert'
      'alert-warning'
    when 'notice'
      'alert-info'
    else
      flash_type.to_s
    end
  end

  def show_path(path, tour)
    case path
    when 'sea_tour_path'
      sea_tour_path(tour)
    when 'land_tour_path'
      land_tour_path(tour)
    when 'evening_show_path'
      evening_show_path(tour)
    when 'phuket_tour_path'
      phuket_tour_path(tour)
    when 'avia_tour_path'
      avia_tour_path(tour)
    when 'boat_path'
      boat_path(tour)
    when 'shop_path'
      shop_path(tour)
    when 'SeaTour'
      sea_tour_path(tour)
    when 'LandTour'
      land_tour_path(tour)
    when 'EveningShow'
      evening_show_path(tour)
    when 'PhuketTour'
      phuket_tour_path(tour)
    when 'AviaTour'
      avia_tour_path(tour)
    when 'Boat'
      boat_path(tour)
    when 'Shop'
      shop_path(tour)
    else
      sea_tour_path(tour)
    end
  end

  def ferries_path
    tour = SeaTour.where(title: "Паромы на острова").first
    if tour != nil
      sea_tour_path(tour)
    else
      # sea_tour_path(SeaTour.first)
    end
  end

  def show_svg(path)
    File.open("app/assets/images/#{path}", "rb") do |file|
      raw file.read
    end
  end

  def get_all_index_tour
    all_index_tour = []
    shops = Shop.where(popular: true)
    boats = Boat.where(popular: true)
    sea_tours = SeaTour.where(popular: true)
    land_tours = LandTour.where(popular: true)
    evening_shows = EveningShow.where(popular: true)
    phuket_tours = PhuketTour.where(popular: true)
    avia_tours = AviaTour.where(popular: true)
    individual_tours = IndividualTour.where(popular: true)
    all_index_tour = shops + boats + sea_tours + land_tours + evening_shows + phuket_tours + avia_tours + individual_tours
    all_index_tour
  end

  def find_item_tour(product_id, product_type)
    case product_type
    when 'SeaTour'
      SeaTour.find(product_id)
    when 'LandTour'
      LandTour.find(product_id)
    when 'EveningShow'
      EveningShow.find(product_id)
    when 'PhuketTour'
      PhuketTour.find(product_id)
    when 'AviaTour'
      AviaTour.find(product_id)
    when 'Boat'
      Boat.find(product_id)
    when 'Shop'
      Shop.find(product_id)
    when 'StaticPage'
      StaticPage.find(product_id)
    end
  end
  
end
