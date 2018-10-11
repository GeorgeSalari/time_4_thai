class LandTour < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
