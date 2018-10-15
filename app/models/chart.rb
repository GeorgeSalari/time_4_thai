class Chart < ApplicationRecord
  has_many :cart_items

  def add_product(product_params)
    current_item = cart_items.find_by(product_id: product_params[:product_id], product_type: product_params[:product_type])
    if current_item
      current_item.quantity += product_params[:quantity].to_i
      current_item.save
    else
      new_item = cart_items.create(product_id: product_params[:product_id],
                                  quantity: product_params[:quantity],
                                  adult_count: product_params[:adult_count],
                                  child_count: product_params[:child_count],
                                  booking_date: product_params[:booking_date],
                                  cart_id: self.id )
    end
      new_item
  end
end
