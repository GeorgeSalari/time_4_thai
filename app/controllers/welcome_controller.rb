class WelcomeController < ApplicationController
  def index
    @sea_tours = SeaTour.all
  end
end
