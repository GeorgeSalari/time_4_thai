class UserMailer < ApplicationMailer
  def change_date_time(date)
    year = date.year
    month = date.month
    day = date.day
    hour = date.hour + 7
    hour = 0 if hour == 24
    min = date.min
    sec = date.sec
    "#{day}-#{month}-#{year} #{hour}:#{min}:#{sec}"
  end

  def find_item_tour(product_id, product_type)
    case product_type
    when 'SeaTour'
      SeaTour.find(product_id)
    when 'LandTour'
      LandTour.find(product_id)
    when 'EveningShow'
      EveningShow.find(product_id)
    when 'PhuketTour'
      PhuketTour.find(product_id)
    when 'AviaTour'
      AviaTour.find(product_id)
    when 'Boat'
      Boat.find(product_id)
    end
  end
end
