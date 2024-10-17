// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "memo"
import "application"
import "@hotwired/stimulus"
import "@hotwired/stimulus-loading"

// こうしてapp.jsに全てを紐づけておくことで
// appが各ファイルを認識するようになる。

// また、これらの省略化を設定・定義づけているのは
// <config/importmap.rb>で、ここでpinで指定している。