require 'test_helper'

class PhuketToursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @phuket_tour = phuket_tours(:one)
  end

  test "should get index" do
    get phuket_tours_url
    assert_response :success
  end

  test "should get new" do
    get new_phuket_tour_url
    assert_response :success
  end

  test "should create phuket_tour" do
    assert_difference('PhuketTour.count') do
      post phuket_tours_url, params: { phuket_tour: {  } }
    end

    assert_redirected_to phuket_tour_url(PhuketTour.last)
  end

  test "should show phuket_tour" do
    get phuket_tour_url(@phuket_tour)
    assert_response :success
  end

  test "should get edit" do
    get edit_phuket_tour_url(@phuket_tour)
    assert_response :success
  end

  test "should update phuket_tour" do
    patch phuket_tour_url(@phuket_tour), params: { phuket_tour: {  } }
    assert_redirected_to phuket_tour_url(@phuket_tour)
  end

  test "should destroy phuket_tour" do
    assert_difference('PhuketTour.count', -1) do
      delete phuket_tour_url(@phuket_tour)
    end

    assert_redirected_to phuket_tours_url
  end
end
