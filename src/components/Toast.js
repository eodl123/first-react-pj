import React from "react";
import "./Toast.css";
import ToastMessage from "./ToastMessage";
import ToastButton from "./ToastButton";

const Toast = ({ message, children }) => {
  return <div className={`toast toast-${message.title}`}>{children}</div>;
};

export default Toast;

const hello = 10;
const world = 20;
export { hello, world };

//

// 만약 success박스는 success만 보여 주고
// warning일때는 안에 조금더 많은 텍스트를 보여주고 error일경우에는 오른쪽에 두개의 버튼을 보이게 해야 한다면 새로운 요소들이 추가 되거나 빼야 하는 경우가 생기는 경우가 빈번하다.
/* 버튼부위와 버튼부위의 컴포넌트를 쪼갰다. */
/* 컴포넌트를 나눈것 역시 리팩토링의 일부이다. */
/* 리액트는 하나의 컴포넌트가 하나의 관심사를 가지도록 한다. */
//childern은 자식관계라 toast태그 안에 넣어주면 자식이 된다.
