class LandToursController < ApplicationController
  before_action :set_land_tour, only: [:show, :edit, :update, :destroy]

  # GET /land_tours
  # GET /land_tours.json
  def index
    @land_tours = LandTour.all
  end

  # GET /land_tours/1
  # GET /land_tours/1.json
  def show
  end

  # GET /land_tours/new
  def new
    @land_tour = LandTour.new
  end

  # GET /land_tours/1/edit
  def edit
  end

  # POST /land_tours
  # POST /land_tours.json
  def create
    @land_tour = LandTour.new(land_tour_params)

    respond_to do |format|
      if @land_tour.save
        format.html { redirect_to @land_tour, notice: 'Land tour was successfully created.' }
        format.json { render :show, status: :created, location: @land_tour }
      else
        format.html { render :new }
        format.json { render json: @land_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /land_tours/1
  # PATCH/PUT /land_tours/1.json
  def update
    respond_to do |format|
      if @land_tour.update(land_tour_params)
        format.html { redirect_to @land_tour, notice: 'Land tour was successfully updated.' }
        format.json { render :show, status: :ok, location: @land_tour }
      else
        format.html { render :edit }
        format.json { render json: @land_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /land_tours/1
  # DELETE /land_tours/1.json
  def destroy
    @land_tour.destroy
    respond_to do |format|
      format.html { redirect_to land_tours_url, notice: 'Land tour was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_land_tour
      @land_tour = LandTour.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def land_tour_params
      params.require(:land_tour).permit(:title, :short_content, :content, :adult_price, :child_price)
    end
end