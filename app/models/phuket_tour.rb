class PhuketTour < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
