import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImComplateList(inputtext);
};

//未完了リストから指定の要素を削除
const deleteFromImComplateList = (target) => {
  document.getElementById("imcomplate-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deleteFromComplateList = (target) => {
  document.getElementById("complate-list").removeChild(target);
};

//未完了リストに指定したDOMを追加する
const createImComplateList = (text) => {
  //div作成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン作成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を削除する
    deleteFromImComplateList(complateButton.parentNode);

    //押された完了ボタンの親タグ（div）を完了したToDoに追加する
    const addTarget = complateButton.parentNode;

    //ToDO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を削除
    addTarget.textContent = null;

    //liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻るボタンの親タグ（div）を削除する
      deleteFromComplateList(backButton.parentNode);
      const addTarget = backButton.parentNode;
      const text = addTarget.firstElementChild.innerText;

      //div以下を削除
      addTarget.textContent = null;

      //liタグ作成
      const li = document.createElement("li");
      li.innerText = text;

      createImComplateList(text);
    });

    //削除ボタン作成（完了リストから）
    const deleteButtonForComplateList = document.createElement("button");
    deleteButtonForComplateList.innerText = "削除";
    deleteButtonForComplateList.addEventListener("click", () => {
      deleteFromComplateList(deleteButtonForComplateList.parentNode);
    });

    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(backButton);
    div.appendChild(deleteButtonForComplateList);

    //完了リストに追加
    document.getElementById("complate-list").appendChild(div);
  });

  //削除ボタン作成（未完了リストから）
  const deleteButtonForImComplateList = document.createElement("button");
  deleteButtonForImComplateList.innerText = "削除";
  deleteButtonForImComplateList.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を削除する
    deleteFromImComplateList(deleteButtonForImComplateList.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButtonForImComplateList);

  //未完了リストに追加
  document.getElementById("imcomplate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
