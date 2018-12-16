class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      flash[:success] = 'Спасибо за комментарий.'
      redirect_back(fallback_location: root_path)
    else
      flash[:error] = 'Извините, что то пошло не так, попробуйте снова.'
      redirect_back(fallback_location: root_path)
    end
  end

private
  def comment_params
    params.require(:comment).permit(:customer_name, :customer_email, :comment, :avatar, :tour_id, :tour_type, {images: []})
  end

end
