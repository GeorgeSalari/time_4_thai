class WelcomeController < ApplicationController
  before_action :new_order, :new_call_order, only: :index

  def index
    @sea_tours = SeaTour.all
    @comment = Comment.new
  end
end
