require 'test_helper'

class SeaToursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sea_tour = sea_tours(:one)
  end

  test "should get index" do
    get sea_tours_url
    assert_response :success
  end

  test "should get new" do
    get new_sea_tour_url
    assert_response :success
  end

  test "should create sea_tour" do
    assert_difference('SeaTour.count') do
      post sea_tours_url, params: { sea_tour: {  } }
    end

    assert_redirected_to sea_tour_url(SeaTour.last)
  end

  test "should show sea_tour" do
    get sea_tour_url(@sea_tour)
    assert_response :success
  end

  test "should get edit" do
    get edit_sea_tour_url(@sea_tour)
    assert_response :success
  end

  test "should update sea_tour" do
    patch sea_tour_url(@sea_tour), params: { sea_tour: {  } }
    assert_redirected_to sea_tour_url(@sea_tour)
  end

  test "should destroy sea_tour" do
    assert_difference('SeaTour.count', -1) do
      delete sea_tour_url(@sea_tour)
    end

    assert_redirected_to sea_tours_url
  end
end
