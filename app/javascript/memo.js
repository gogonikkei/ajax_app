const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const form = document.getElementById("form");
   //リクエストを送信する処理、
// 今回はページが読み込まれることをトリガーに指定している
form.addEventListener("submit", (e) => {
  e.preventDefault();
// preventDefault()メソッドとは、既定のイベントを無効化するためのメソッド
// ブラウザからのリクエストと、JavaScriptからのリクエストが重複しているためです。
// 「同じ内容が重複して投稿されてしまう」とは、つまり「create
// アクションへのリクエストが2回行われている」ということなのでそれを消す

      const formData = new FormData(form);
    });
// ここではフォームの投稿が実行されることをトリガーにして、
// 非同期通信でメモが投稿されるようにする。まず投稿されたことを
// 認識させるためにform.addEventListenerと記述
      const XHR = new XMLHttpRequest();
// 4行目の「new FormData」の時と同様、「new XMLHttpRequest」
// と記述することで、新しくオブジェクトを生成できる。このコードで
// 非同期通信を行うためにXMLHttpRequestオブジェクトを生成する

// これはJavaすくからサーバーサイドへとリクエストを送信するために
// 行なっている。参照カリキュラム：https://master.tech-camp.in/v2/curriculums/8225
     XHR.open("POST", "/posts", true);
// 前行で必要なXHRメソッドを生成できたので、次にopenメソッドを用いて
// リクエストを初期化する、リク内容の指定のために必要なメソッドらしい
//  openメソッドを用いるときは、XHR.open("POST", "/posts", true);のように表記します。

// 第一引数にはHTTPメソッド、第二引数にはパス、
// 第三引数には非同期通信であるかをtrueかfalseで記述
    XHR.open("POST", "/posts", true);  //「post」→「posts」に戻す
    XHR.responseType = "json";
    XHR.send(formData);
// send()メソッドとは、リクエストを送信するメソッドです。
// XMLHttpRequestオブジェクトのメソッドの一種
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");     
// リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
      const item = XHR.response.post;
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">＄
            ${item.content}
          </div>
        </div>`;
        list.insertAdjacentHTML("afterend", html);
        formText.value = "";
//formTextのvalue属性に空の文字列を指定することで、フォームの
//中身をリセットしている
  };
};
 
 window.addEventListener('turbo:load', post);