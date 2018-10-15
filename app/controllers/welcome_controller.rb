class WelcomeController < ApplicationController
  def index
    @order = Order.new
    @sea_tours = SeaTour.all
  end
end
