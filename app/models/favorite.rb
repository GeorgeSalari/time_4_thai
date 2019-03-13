class Favorite < ApplicationRecord
	has_many :favorite_items
  include ApplicationHelper

	def add_product(product_params)
    params = product_params[:order].nil? ? product_params : product_params[:order]

    current_item = favorite_items.find_by(product_id: params[:product_id], product_type: params[:product_type])

    if current_item
      current_item.quantity += params[:quantity].to_i
      current_item.adult_count = params[:adult_count]
      current_item.child_count = params[:child_count]
      current_item.booking_date = params[:booking_date]
      current_item.save
    else
      new_item = favorite_items.create(product_id: params[:product_id],
                                  product_type: transform_tour_type(params[:product_type]),
                                  quantity: params[:quantity],
                                  adult_count: params[:adult_count],
                                  child_count: params[:child_count],
                                  booking_date: params[:booking_date],
                                  favorite_id: self.id )
    end
    new_item
  end

  def remove_product(item_id, product_type)
    favorite_item = favorite_items.find_by(product_id: item_id, product_type: product_type)
    if favorite_item
      favorite_item.destroy
    end
  end
end
