class WelcomeController < ApplicationController
  def index
    @order = Order.new
    @call_order = CallOrder.new
    @sea_tours = SeaTour.all
  end
end
