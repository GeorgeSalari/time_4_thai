class ActiveToursController < ApplicationController
  before_action :set_active_tour, only: [:show, :edit, :update, :destroy]
  before_action :new_order, :new_call_order, only: [:index, :show]
  rescue_from NoMethodError, :with => :check_error

  # GET /active_tours
  # GET /active_tours.json
  def index
    @active_tours = ActiveTour.order(order_number: :asc)
  end

  # GET /active_tours/1
  # GET /active_tours/1.json
  def show
    @comments = Comment.where(tour_type: "ActiveTour", tour_id: params[:id])
  end

  # GET /active_tours/new
  def new
    if logged_in?
      @active_tour = ActiveTour.new
    else
      flash[:success] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  # GET /active_tours/1/edit
  def edit
    if !logged_in?
      flash[:success] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  # POST /active_tours
  # POST /active_tours.json
  def create
    if logged_in?
      @active_tour = ActiveTour.new(active_tour_params)

      respond_to do |format|
        if @active_tour.save
          format.html { redirect_to @active_tour, notice: 'Active tour was successfully created.' }
          format.json { render :show, status: :created, location: @active_tour }
        else
          format.html { render :new }
          format.json { render json: @active_tour.errors, status: :unprocessable_entity }
        end
      end
    else
      flash[:success] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  # PATCH/PUT /active_tours/1
  # PATCH/PUT /active_tours/1.json
  def update
    if logged_in?
      respond_to do |format|
        if @active_tour.update(active_tour_params)
          format.html { redirect_to @active_tour, notice: 'Active tour was successfully updated.' }
          format.json { render :show, status: :ok, location: @active_tour }
        else
          format.html { render :edit }
          format.json { render json: @active_tour.errors, status: :unprocessable_entity }
        end
      end
    else
      flash[:success] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  # DELETE /active_tours/1
  # DELETE /active_tours/1.json
  def destroy
    if logged_in?
      @active_tour.destroy
      respond_to do |format|
        format.html { redirect_to active_tours_url, notice: 'Active tour was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      flash[:success] = 'У вас нет доступа!'
      redirect_to root_path
    end
  end

  private
    def check_error
      flash[:success] = 'Что то пошло не так, извините!'
      redirect_to root_path
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_active_tour
      @active_tour = ActiveTour.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def active_tour_params
      params.require(:active_tour).permit(:duration, :tour_program, :included, :necessary, :popular, :title, :short_content, :content, :adult_price, :order_number, :child_price, {images: []})
    end
end
