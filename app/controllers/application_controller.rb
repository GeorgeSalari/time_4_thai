class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_cart

  private
  def set_cart
    @cart = Chart.find(session[:cart_id])
  rescue ActiveRecord::RecordNotFound
    @cart = Chart.create
    session[:cart_id] = @cart.id
  end
end
