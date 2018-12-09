class Boat < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
