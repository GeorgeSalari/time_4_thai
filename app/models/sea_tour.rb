class SeaTour < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
