module ApplicationHelper
  def bootstrap_class_for_flash(flash_type)
    case flash_type
    when 'success'
      'alert-success'
    when 'error'
      'alert-danger'
    when 'alert'
      'alert-warning'
    when 'notice'
      'alert-info'
    else
      flash_type.to_s
    end
  end

  def show_path(path, tour)
    case path
    when 'sea_tour_path'
      sea_tour_path(tour)
    when 'land_tour_path'
      land_tour_path(tour)
    when 'evening_show_path'
      evening_show_path(tour)
    else
      sea_tour_path(tour)
    end
  end

end
