class WelcomeController < ApplicationController
	include ApplicationHelper
  before_action :new_order, :new_call_order, only: :index

  def index
    @all_index_tour = get_all_index_tour()
    @comments = Comment.order(created_at: :desc)
  end
end
