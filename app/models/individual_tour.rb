class IndividualTour < ApplicationRecord
  mount_uploaders :images, TourImagesUploader
end
