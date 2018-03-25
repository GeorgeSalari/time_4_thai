require 'test_helper'

class AviaToursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @avia_tour = avia_tours(:one)
  end

  test "should get index" do
    get avia_tours_url
    assert_response :success
  end

  test "should get new" do
    get new_avia_tour_url
    assert_response :success
  end

  test "should create avia_tour" do
    assert_difference('AviaTour.count') do
      post avia_tours_url, params: { avia_tour: {  } }
    end

    assert_redirected_to avia_tour_url(AviaTour.last)
  end

  test "should show avia_tour" do
    get avia_tour_url(@avia_tour)
    assert_response :success
  end

  test "should get edit" do
    get edit_avia_tour_url(@avia_tour)
    assert_response :success
  end

  test "should update avia_tour" do
    patch avia_tour_url(@avia_tour), params: { avia_tour: {  } }
    assert_redirected_to avia_tour_url(@avia_tour)
  end

  test "should destroy avia_tour" do
    assert_difference('AviaTour.count', -1) do
      delete avia_tour_url(@avia_tour)
    end

    assert_redirected_to avia_tours_url
  end
end
