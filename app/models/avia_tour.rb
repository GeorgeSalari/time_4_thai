class AviaTour < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
