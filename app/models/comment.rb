class Comment < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
  mount_uploader :avatar, TourImagesUploader
end
