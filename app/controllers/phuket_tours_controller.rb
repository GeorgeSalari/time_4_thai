class PhuketToursController < ApplicationController
  before_action :set_phuket_tour, only: [:show, :edit, :update, :destroy]

  # GET /phuket_tours
  # GET /phuket_tours.json
  def index
    @phuket_tours = PhuketTour.all
  end

  # GET /phuket_tours/1
  # GET /phuket_tours/1.json
  def show
  end

  # GET /phuket_tours/new
  def new
    @phuket_tour = PhuketTour.new
  end

  # GET /phuket_tours/1/edit
  def edit
  end

  # POST /phuket_tours
  # POST /phuket_tours.json
  def create
    @phuket_tour = PhuketTour.new(phuket_tour_params)

    respond_to do |format|
      if @phuket_tour.save
        format.html { redirect_to @phuket_tour, notice: 'Phuket tour was successfully created.' }
        format.json { render :show, status: :created, location: @phuket_tour }
      else
        format.html { render :new }
        format.json { render json: @phuket_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /phuket_tours/1
  # PATCH/PUT /phuket_tours/1.json
  def update
    respond_to do |format|
      if @phuket_tour.update(phuket_tour_params)
        format.html { redirect_to @phuket_tour, notice: 'Phuket tour was successfully updated.' }
        format.json { render :show, status: :ok, location: @phuket_tour }
      else
        format.html { render :edit }
        format.json { render json: @phuket_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /phuket_tours/1
  # DELETE /phuket_tours/1.json
  def destroy
    @phuket_tour.destroy
    respond_to do |format|
      format.html { redirect_to phuket_tours_url, notice: 'Phuket tour was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_phuket_tour
      @phuket_tour = PhuketTour.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def phuket_tour_params
      params.fetch(:phuket_tour, {})
    end
end
