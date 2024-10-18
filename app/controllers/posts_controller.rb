class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post }
    # レスポンスでindex.html.erbを返すように指定しているのは
    #posts_controller.rbのcreateアクション
  end
end



# 一方、Ajaxを用いた非同期通信のレスポンスでは、JSON形式のデータ
# そのものを返している。データそのものを受け取って、ページの一部分
# のみを更新するため、ブラウザでページ全体を再読み込みしなくてよい
# のが特徴。

# 編集前のcreateアクション、つまりビューファイル(index.html.erb)
# を元に生成されたhtmlを返していた時のコード↓

# def create
#   Post.create(content: params[:content])
#   redirect_to action: :index
# end