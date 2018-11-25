class UserMailer < ApplicationMailer
  def change_date_time(date)
    year = date.year
    month = date.month
    day = date.day
    hour = date.hour + 7
    hour = 0 if hour == 24
    min = date.min
    sec = date.sec
    DateTime.strptime("#{day}-#{month}-#{year} #{hour}:#{min}:#{sec}","%d-%m-%Y %H:%M:%S").to_s.split('T').join(' ').split('+')[0]
  end

  def find_item_tour(product_id, product_type)
    case product_type
    when 'SeaTour'
      SeaTour.find(product_id)
    when 'LandTour'
      LandTour.find(product_id)
    when 'EveningShow'
      EveningShow.find(product_id)
    end
  end
end
