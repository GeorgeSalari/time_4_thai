class CartsController < ApplicationController
  before_action :new_order, :new_call_order, only: :index

  def index
  end
end
