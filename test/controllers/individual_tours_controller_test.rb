require 'test_helper'

class IndividualToursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @individual_tour = individual_tours(:one)
  end

  test "should get index" do
    get individual_tours_url
    assert_response :success
  end

  test "should get new" do
    get new_individual_tour_url
    assert_response :success
  end

  test "should create individual_tour" do
    assert_difference('IndividualTour.count') do
      post individual_tours_url, params: { individual_tour: {  } }
    end

    assert_redirected_to individual_tour_url(IndividualTour.last)
  end

  test "should show individual_tour" do
    get individual_tour_url(@individual_tour)
    assert_response :success
  end

  test "should get edit" do
    get edit_individual_tour_url(@individual_tour)
    assert_response :success
  end

  test "should update individual_tour" do
    patch individual_tour_url(@individual_tour), params: { individual_tour: {  } }
    assert_redirected_to individual_tour_url(@individual_tour)
  end

  test "should destroy individual_tour" do
    assert_difference('IndividualTour.count', -1) do
      delete individual_tour_url(@individual_tour)
    end

    assert_redirected_to individual_tours_url
  end
end
