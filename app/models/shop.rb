class Shop < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
