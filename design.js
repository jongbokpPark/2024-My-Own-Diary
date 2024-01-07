let wrapper;
let writeCont;
let title;
let detail;
let save;
let diary;
let note;
let btnWrap;
let btnEdit;
let btnDel;

let retouchPopup;
let popTitle;
let reTitle;
let reDetail;
let reBtnWrap;
let edit;
let revoke;

let lineContainer;
let noteline;

addEventListener("load", function () {
  wrapper = document.getElementById("wrapper");
  wrapper.style.width = "1100px";
  wrapper.style.height = "660px";
  // wrapper.style.margin = "100px auto 0";
  // wrapper.style.display = "none";
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "space-between";
  wrapper.style.alignItems = "center";
  wrapper.style.position = "absolute";
  wrapper.style.left = 50 + "%";
  wrapper.style.top = 50 + "%";
  wrapper.style.transform = "translate(-50%, -50%) scale(0.83)";
  // wrapper.style.transform = "translate(-50%, -50%) scale(0.3)";
  // wrapper.style.opacity = 0;

  writeCont = document.getElementById("writeCont");
  writeCont.style.width = "520px";
  writeCont.style.height = "100%";
  writeCont.style.background = "#d7e7e6";
  writeCont.style.display = "flex";
  writeCont.style.justifyContent = "center";
  writeCont.style.alignItems = "center";
  writeCont.style.flexDirection = "column";
  writeCont.style.boxShadow = "-5px 5px 20px #00000036";
  writeCont.style.transform= "scaleX(-0.01)";
  writeCont.style.transformOrigin= "right top";
  writeCont.style.transition = "2s"
  writeCont.style.opacity = 0

  title = document.getElementById("title");
  title.style.width = "400px";
  title.style.height = "52px";

  detail = document.getElementById("detail");
  detail.style.width = "400px";
  detail.style.height = "360px";
  detail.style.margin = "10px 0";

  save = document.getElementById("save");
  save.style.width = "400px";
  save.style.height = "52px";

  diary = document.getElementById("diary");
  diary.style.width = "480px";
  diary.style.height = "100%";
  diary.style.borderRadius = "15px";
  diary.style.marginRight = "20px";
  diary.style.background = "#d6935a";
  diary.style.display = "flex";
  diary.style.justifyContent = "center";
  diary.style.alignItems = "center";
  diary.style.position = "relative";
  diary.style.boxShadow = "-5px 5px 20px #00000036";
  diary.style.transform= "scaleX(0.01)";
  diary.style.transformOrigin= "left top";
  diary.style.transition = "2s"
  diary.style.opacity = 0

  note = document.getElementById("note");
  note.style.width = "466px";
  note.style.height = "642px";
  note.style.borderRadius = "15px";
  note.style.borderRadius = "15px";
  note.style.background = "white";
  note.style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.35)";
  note.style.position = "relative";

  let springContainer = document.getElementById("springCont");

  for (let i = 0; i < 12; i++) {
    let noteSpring = document.createElement("div");
    noteSpring.id = "noteSpring";

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    noteSpring.appendChild(span1);
    noteSpring.appendChild(span2);

    springContainer.appendChild(noteSpring);
  }

  lineContainer = document.getElementById("lineCont");
  lineContainer.style.display = "flex";
  lineContainer.style.justifyContent = "center";
  lineContainer.style.alignItems = "center";
  lineContainer.style.flexDirection = "column";

  lineContainer.style.position = "absolute";
  lineContainer.style.top = 50 + "%";
  lineContainer.style.left = 50 + "%";
  lineContainer.style.transform = "translate(-50%, -50%)";

  for (let i = 0; i < 16; i++) {
    noteline = document.createElement("span");
    noteline.id = "noteLine";
    noteline.style.display = "block";
    noteline.style.width = 350 + "px";
    noteline.style.height = 2 + "px";
    noteline.style.background = "#eee";
    noteline.style.margin = "17px 0";

    lineContainer.appendChild(noteline);
  }

  btnWrap = document.getElementById("btnWrap");
  btnWrap.style.width = "220px";
  btnWrap.style.height = "37px";
  btnWrap.style.position = "absolute";
  btnWrap.style.left = "50%";
  btnWrap.style.bottom = "20px";
  btnWrap.style.transform = "translateX(-50%)";
  btnWrap.style.zIndex = 100;
  btnWrap.style.display = "flex";
  btnWrap.style.justifyContent = "space-between";
  btnWrap.style.alignItems = "center";

  // btnRetouch = document.getElementById("retouch");
  // btnRetouch.style.width = "106px";
  // btnRetouch.style.height = "36px";
  // btnRetouch.style.padding = "0";
  // btnRetouch.style.margin = "0";
  // btnRetouch.style.boxSizing = "border-box";

  btnDel = document.getElementById("del");
  btnDel.style.width = "100%";
  btnDel.style.height = "36px";
  btnDel.style.padding = "0";
  btnDel.style.margin = "0";
  btnDel.style.boxSizing = "border-box";

  // // retouchPopup 요소 가져오기
  // retouchPopup = document.getElementById("retouchPopup");

  // // retouchPopup의 스타일 설정
  // retouchPopup.style.width = "900px";
  // retouchPopup.style.height = "500px";
  // retouchPopup.style.background = "#d7e7e6";
  // retouchPopup.style.position = "absolute";
  // retouchPopup.style.left = "50%";
  // retouchPopup.style.top = "50%";
  // retouchPopup.style.transform = "translate(-50%, -50%)";
  // retouchPopup.style.zIndex = "1000";
  // retouchPopup.style.display = "none";
  // // retouchPopup.style.display = "flex";
  // retouchPopup.style.justifyContent = "center";
  // retouchPopup.style.alignItems = "center";
  // retouchPopup.style.flexDirection = "column";
  // retouchPopup.style.color = "#2d2d2d";
  // retouchPopup.style.boxShadow = "-5px 5px 20px #00000036";

  // // popTitle, reTitle, reDetail, reBtnWrap, edit, revoke 요소 가져오기
  // popTitle = document.getElementById("popTitle");
  // reTitle = document.getElementById("reTitle");
  // reDetail = document.getElementById("reDetail");
  // reBtnWrap = document.getElementById("reBtnWrap");
  // edit = document.getElementById("edit");
  // revoke = document.getElementById("revoke");

  // // popTitle의 스타일 설정
  // popTitle.style.fontSize = "28px";
  // popTitle.style.fontWeight = "700";
  // popTitle.style.margin = "0";
  // popTitle.style.marginBottom = "20px";

  // // reTitle의 스타일 설정
  // reTitle.style.width = "720px";
  // reTitle.style.height = "52px";
  // reTitle.style.fontSize = "22px";
  // reTitle.style.fontWeight = "700";

  // // reDetail의 스타일 설정
  // reDetail.style.width = "720px";
  // reDetail.style.height = "250px";
  // reDetail.style.fontSize = "22px";
  // reDetail.style.fontWeight = "500";
  // reDetail.style.margin = "10px 0 20px";

  // // reBtnWrap의 스타일 설정
  // reBtnWrap.style.width = "220px";
  // reBtnWrap.style.height = "36px";

  // // edit의 스타일 설정
  // edit.style.width = "106px";
  // edit.style.height = "36px";

  // // revoke의 스타일 설정
  // revoke.style.width = "106px";
  // revoke.style.height = "36px";
});


