require 'test_helper'

class EveningShowsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @evening_show = evening_shows(:one)
  end

  test "should get index" do
    get evening_shows_url
    assert_response :success
  end

  test "should get new" do
    get new_evening_show_url
    assert_response :success
  end

  test "should create evening_show" do
    assert_difference('EveningShow.count') do
      post evening_shows_url, params: { evening_show: {  } }
    end

    assert_redirected_to evening_show_url(EveningShow.last)
  end

  test "should show evening_show" do
    get evening_show_url(@evening_show)
    assert_response :success
  end

  test "should get edit" do
    get edit_evening_show_url(@evening_show)
    assert_response :success
  end

  test "should update evening_show" do
    patch evening_show_url(@evening_show), params: { evening_show: {  } }
    assert_redirected_to evening_show_url(@evening_show)
  end

  test "should destroy evening_show" do
    assert_difference('EveningShow.count', -1) do
      delete evening_show_url(@evening_show)
    end

    assert_redirected_to evening_shows_url
  end
end
