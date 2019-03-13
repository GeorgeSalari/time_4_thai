class FavoriteItemsController < ApplicationController
	before_action :set_favorite_item, only: [:destroy]

	# POST /favorite_items
  def create
    @favorite.add_product(params)

    unless @favorite.save
      flash[:error] = 'Возникла проблема, попробуйте снова'
      redirect_back fallback_location: root_path
    end

  end

  # DELETE /cart_items/1
  def destroy
    @favorite.remove_product(@favorite_item.product_id, @favorite_item.product_type)
    redirect_back fallback_location: root_path
  end

  private
  def set_favorite_item
    @favorite_item = FavoriteItem.find(params[:id])
  end
end
