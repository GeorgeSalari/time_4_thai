require 'test_helper'

class LandToursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @land_tour = land_tours(:one)
  end

  test "should get index" do
    get land_tours_url
    assert_response :success
  end

  test "should get new" do
    get new_land_tour_url
    assert_response :success
  end

  test "should create land_tour" do
    assert_difference('LandTour.count') do
      post land_tours_url, params: { land_tour: {  } }
    end

    assert_redirected_to land_tour_url(LandTour.last)
  end

  test "should show land_tour" do
    get land_tour_url(@land_tour)
    assert_response :success
  end

  test "should get edit" do
    get edit_land_tour_url(@land_tour)
    assert_response :success
  end

  test "should update land_tour" do
    patch land_tour_url(@land_tour), params: { land_tour: {  } }
    assert_redirected_to land_tour_url(@land_tour)
  end

  test "should destroy land_tour" do
    assert_difference('LandTour.count', -1) do
      delete land_tour_url(@land_tour)
    end

    assert_redirected_to land_tours_url
  end
end
