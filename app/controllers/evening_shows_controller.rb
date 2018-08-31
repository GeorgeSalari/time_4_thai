class EveningShowsController < ApplicationController
  before_action :set_evening_show, only: [:show, :edit, :update, :destroy]

  # GET /evening_shows
  # GET /evening_shows.json
  def index
    @evening_shows = EveningShow.all
  end

  # GET /evening_shows/1
  # GET /evening_shows/1.json
  def show
  end

  # GET /evening_shows/new
  def new
    @evening_show = EveningShow.new
  end

  # GET /evening_shows/1/edit
  def edit
  end

  # POST /evening_shows
  # POST /evening_shows.json
  def create
    @evening_show = EveningShow.new(evening_show_params)

    respond_to do |format|
      if @evening_show.save
        format.html { redirect_to @evening_show, notice: 'Evening show was successfully created.' }
        format.json { render :show, status: :created, location: @evening_show }
      else
        format.html { render :new }
        format.json { render json: @evening_show.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /evening_shows/1
  # PATCH/PUT /evening_shows/1.json
  def update
    respond_to do |format|
      if @evening_show.update(evening_show_params)
        format.html { redirect_to @evening_show, notice: 'Evening show was successfully updated.' }
        format.json { render :show, status: :ok, location: @evening_show }
      else
        format.html { render :edit }
        format.json { render json: @evening_show.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /evening_shows/1
  # DELETE /evening_shows/1.json
  def destroy
    @evening_show.destroy
    respond_to do |format|
      format.html { redirect_to evening_shows_url, notice: 'Evening show was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_evening_show
      @evening_show = EveningShow.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def evening_show_params
      params.require(:evening_show).permit(:title, :short_content, :content, :adult_price, :child_price)
    end
end
