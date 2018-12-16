class ApplicationMailer < ActionMailer::Base
  default from: 'coco-travel@example.com'
  layout 'mailer'

  def call_request
    @customer_name = params[:call_order][:customer_name]
    @customer_phone = params[:call_order][:customer_phone]
    date = change_date_time(params[:call_order][:created_at])
    @date = date
    @call_type = params[:call_order][:call_type]
    mail(to: [ ENV['EMAIL'], ENV['EMAIL_DIMA'] ], subject: 'Заказ звонка')
  end

  def tour_request
    @customer_name = params[:order][:customer_name]
    @customer_phone = params[:order][:customer_phone]
    @customer_email = params[:order][:customer_email]
    @customer_comment = params[:order][:customer_comment]
    date = change_date_time(params[:order][:created_at])
    @date = date
    tour = find_item_tour(params[:order][:product_id], params[:order][:product_type])
    @tour_title = tour.title
    @adult = params[:order][:adult_count]
    @child = params[:order][:child_count]
    @tour_date = params[:order][:booking_date]
    mail(to: [ ENV['EMAIL'], ENV['EMAIL_DIMA'] ], subject: 'Заказ экскурсии')
  end
end
