class Cart < ApplicationRecord
  has_many :cart_items

  def add_product(product_params)
    current_item = cart_items.find_by(product_id: product_params[:order][:product_id], product_type: product_params[:order][:product_type])

    if current_item
      current_item.quantity += product_params[:order][:quantity].to_i
      current_item.save
    else
      new_item = cart_items.create(product_id: product_params[:order][:product_id],
                                  product_type: product_params[:order][:product_type],
                                  quantity: product_params[:order][:quantity],
                                  adult_count: product_params[:order][:adult_count],
                                  child_count: product_params[:order][:child_count],
                                  booking_date: product_params[:order][:booking_date],
                                  cart_id: self.id )
    end
      new_item
  end
end
