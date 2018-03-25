class ToursController < ApplicationController
  before_action :set_sea_tour, only: [:show, :edit, :update, :destroy]

  # GET /sea_tours
  # GET /sea_tours.json
  def index
    @sea_tours = SeaTour.all
  end

  # GET /sea_tours/1
  # GET /sea_tours/1.json
  def show
  end

  # GET /sea_tours/new
  def new
    @sea_tour = SeaTour.new
  end

  # GET /sea_tours/1/edit
  def edit
  end

  # POST /sea_tours
  # POST /sea_tours.json
  def create
    @sea_tour = SeaTour.new(sea_tour_params)

    respond_to do |format|
      if @sea_tour.save
        format.html { redirect_to @sea_tour, notice: 'Sea tour was successfully created.' }
        format.json { render :show, status: :created, location: @sea_tour }
      else
        format.html { render :new }
        format.json { render json: @sea_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sea_tours/1
  # PATCH/PUT /sea_tours/1.json
  def update
    respond_to do |format|
      if @sea_tour.update(sea_tour_params)
        format.html { redirect_to @sea_tour, notice: 'Sea tour was successfully updated.' }
        format.json { render :show, status: :ok, location: @sea_tour }
      else
        format.html { render :edit }
        format.json { render json: @sea_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sea_tours/1
  # DELETE /sea_tours/1.json
  def destroy
    @sea_tour.destroy
    respond_to do |format|
      format.html { redirect_to sea_tours_url, notice: 'Sea tour was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sea_tour
      @sea_tour = SeaTour.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sea_tour_params
      params.require(:sea_tour).permit(:title, :short_content, :content, :adult_price, :child_price)
    end
end
