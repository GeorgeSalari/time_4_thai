class EveningShow < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
