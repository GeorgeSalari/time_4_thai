class StaticPage < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
