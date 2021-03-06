# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
Rails.application.config.assets.precompile += %w( *.svg *.png *.jpg *.jpeg *.gif sea_tours.css magnific-popup.css linearicons.css owl.carousel.css bootstrap-grid.css carts.css bootstrap.css bootstrap-grid.css bootstrap-reboot.css main.css tether.min.js bootstrap.min.js jquery.sticky.js owl.carousel.min.js jquery.magnific-popup.min.js jquery.ajaxchimp.min.js main.js)
