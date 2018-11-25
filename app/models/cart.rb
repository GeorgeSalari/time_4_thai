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

  def remove_product(item_id, product_type)
    cart_item = cart_items.find_by(product_id: item_id, product_type: product_type)
    if cart_item
      cart_item.destroy
    end
  end

  def order_all(params)
    check_flag = true
    self.cart_items.each do |item|
      order = Order.new(order_params(item, params) )
      if order.save
        UserMailer.with(order: order).tour_request.deliver_later
      else
        check_flag = false
      end
    end
    check_flag
  end

  def order_params(item, params)
    {
      product_id: item.product_id,
      product_type: item.product_type,
      quantity: item.quantity,
      adult_count: item.adult_count,
      child_count: item.child_count,
      booking_date: item.booking_date,
      customer_name: params[:order][:customer_name],
      customer_phone: params[:order][:customer_phone],
      customer_email: params[:order][:customer_email],
      customer_comment: params[:order][:customer_comment]
    }
  end
end
