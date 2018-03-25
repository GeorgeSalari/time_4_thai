class AviaToursController < ApplicationController
  before_action :set_avia_tour, only: [:show, :edit, :update, :destroy]

  # GET /avia_tours
  # GET /avia_tours.json
  def index
    @avia_tours = AviaTour.all
  end

  # GET /avia_tours/1
  # GET /avia_tours/1.json
  def show
  end

  # GET /avia_tours/new
  def new
    @avia_tour = AviaTour.new
  end

  # GET /avia_tours/1/edit
  def edit
  end

  # POST /avia_tours
  # POST /avia_tours.json
  def create
    @avia_tour = AviaTour.new(avia_tour_params)

    respond_to do |format|
      if @avia_tour.save
        format.html { redirect_to @avia_tour, notice: 'Avia tour was successfully created.' }
        format.json { render :show, status: :created, location: @avia_tour }
      else
        format.html { render :new }
        format.json { render json: @avia_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /avia_tours/1
  # PATCH/PUT /avia_tours/1.json
  def update
    respond_to do |format|
      if @avia_tour.update(avia_tour_params)
        format.html { redirect_to @avia_tour, notice: 'Avia tour was successfully updated.' }
        format.json { render :show, status: :ok, location: @avia_tour }
      else
        format.html { render :edit }
        format.json { render json: @avia_tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /avia_tours/1
  # DELETE /avia_tours/1.json
  def destroy
    @avia_tour.destroy
    respond_to do |format|
      format.html { redirect_to avia_tours_url, notice: 'Avia tour was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_avia_tour
      @avia_tour = AviaTour.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def avia_tour_params
      params.fetch(:avia_tour, {})
    end
end
