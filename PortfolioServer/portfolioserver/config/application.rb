require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Portfolioserver
  class Application < Rails::Application
    config.load_defaults 5.2
    config.middleware.insert_before 0,
    Rack::Cors do
      allow do
        origins '*'
        resource '*', header: :any, methods: [:get, :post, :options]
      end
    end
  end
end
