require 'test_helper'

class ActiveToursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @active_tour = active_tours(:one)
  end

  test "should get index" do
    get active_tours_url
    assert_response :success
  end

  test "should get new" do
    get new_active_tour_url
    assert_response :success
  end

  test "should create active_tour" do
    assert_difference('ActiveTour.count') do
      post active_tours_url, params: { active_tour: {  } }
    end

    assert_redirected_to active_tour_url(ActiveTour.last)
  end

  test "should show active_tour" do
    get active_tour_url(@active_tour)
    assert_response :success
  end

  test "should get edit" do
    get edit_active_tour_url(@active_tour)
    assert_response :success
  end

  test "should update active_tour" do
    patch active_tour_url(@active_tour), params: { active_tour: {  } }
    assert_redirected_to active_tour_url(@active_tour)
  end

  test "should destroy active_tour" do
    assert_difference('ActiveTour.count', -1) do
      delete active_tour_url(@active_tour)
    end

    assert_redirected_to active_tours_url
  end
end
