const onClickAdd = () => {
  // テキストboxの値を取得し、初期化する
  const inpuText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomepeteList(inpuText);

};

//未完了リストから指定の要素を削除
const deleteFromIncompletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createIncomepeteList = (text) => {

  //div生成
  const div = document.createElement("div");
  div.className = "list-row"

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompletelist(completeButton.parentNode);

    //完了リストに追加する
    const addTarget = completeButton.parentNode;

    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リスとから削除
      const deleteTartget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTartget);

      //テキストを取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncomepeteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget)
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompletelist(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定 ※順番に追加される
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

}

document.getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
