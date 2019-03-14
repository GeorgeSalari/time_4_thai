class PricesController < ApplicationController
  def index
    @sea_tours = SeaTour.order(order_number: :asc)
    @land_tours = LandTour.order(order_number: :asc)
    @evening_shows = EveningShow.order(order_number: :asc)
    @phuket_tours = PhuketTour.order(order_number: :asc)
    @avia_tours = AviaTour.order(order_number: :asc)
    @active_tours = ActiveTour.order(order_number: :asc)
    @shops = Shop.order(order_number: :asc)
    @boats = Boat.order(order_number: :asc)
    @static_pages = StaticPage.all
  end
end
