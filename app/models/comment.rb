class Comment < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
