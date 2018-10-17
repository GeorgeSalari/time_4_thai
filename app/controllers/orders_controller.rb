class OrdersController < ApplicationController
  def create
    @order = Order.new(order_params)
    if @order.save
      @cart.remove_product(@order.product_id, @order.product_type)
      flash[:success] = 'Спасибо за бронирование, мы скоро с вами свяжимся!'
      redirect_back fallback_location: root_path
    else
      flash[:error] = 'Что то пошло не так, попробуйте снова.'
      redirect_back fallback_location: root_path
    end
  end

  private
  def order_params
    params.require(:order).permit(
      :quantity,
      :product_type,
      :product_id,
      :booking_date,
      :adult_count,
      :child_count,
      :customer_name,
      :customer_phone,
      :customer_email,
      :customer_comment
    )
  end
end
