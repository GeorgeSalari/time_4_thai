class ActiveTour < ApplicationRecord
	mount_uploaders :images, TourImagesUploader
end
