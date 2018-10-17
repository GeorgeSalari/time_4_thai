class CartsController < ApplicationController

  def index
    @order = Order.new
  end
end
