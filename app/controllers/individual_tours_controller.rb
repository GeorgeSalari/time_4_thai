class IndividualToursController < ApplicationController
  before_action :set_individual_tour, only: [:show, :edit, :update, :destroy]

  # GET /individual_tours
  # GET /individual_tours.json
  def index
    @individual_tours = IndividualTour.all
  end

  # GET /individual_tours/1
  # GET /individual_tours/1.json
  def show
  end

  # GET /individual_tours/new
  def new
    if logged_in?
      @individual_tour = IndividualTour.new
    else
      flash[:danger] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  # GET /individual_tours/1/edit
  def edit
  end

  # POST /individual_tours
  # POST /individual_tours.json
  def create
    if logged_in?
      @individual_tour = IndividualTour.new(individual_tour_params)

      respond_to do |format|
        if @individual_tour.save
          format.html { redirect_to @individual_tour, notice: 'Individual tour was successfully created.' }
          format.json { render :show, status: :created, location: @individual_tour }
        else
          format.html { render :new }
          format.json { render json: @individual_tour.errors, status: :unprocessable_entity }
        end
      end
    else
      flash[:danger] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  # PATCH/PUT /individual_tours/1
  # PATCH/PUT /individual_tours/1.json
  def update
    if logged_in?
      respond_to do |format|
        if @individual_tour.update(individual_tour_params)
          format.html { redirect_to @individual_tour, notice: 'Individual tour was successfully updated.' }
          format.json { render :show, status: :ok, location: @individual_tour }
        else
          format.html { render :edit }
          format.json { render json: @individual_tour.errors, status: :unprocessable_entity }
        end
      end
    else
      flash[:danger] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  # DELETE /individual_tours/1
  # DELETE /individual_tours/1.json
  def destroy
    if logged_in?
      @individual_tour.destroy
      respond_to do |format|
        format.html { redirect_to individual_tours_url, notice: 'Individual tour was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      flash[:danger] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_individual_tour
      @individual_tour = IndividualTour.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def individual_tour_params
      params.require(:individual_tour).permit(:title, :short_content, :content, :adult_price, :child_price, {images: []})
    end
end
