class WelcomeController < ApplicationController
  before_action :new_order, :new_call_order, only: :index

  def index
    @sea_tours = SeaTour.order(order_number: :asc).first(6)
    @land_tours = LandTour.order(order_number: :asc).first(6)
    @evening_shows = EveningShow.order(order_number: :asc).first(6)
    @phuket_tours = PhuketTour.order(order_number: :asc).first(6)
  end
end
