import "./App.css";
import Toast, { hello, world } from "./components/Toast";
import ToastButton from "./components/ToastButton";
import ToastMessage from "./components/ToastMessage";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right On! Your account has been updated!",
    },
    {
      title: "warning",
      text: "Right On! Your account has been updated!",
    },
    {
      title: "error",
      text: "Un Oh! Something went terribly wrong!",
    },
  ];

  return (
    <div className="wrapper">
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]} />
        {/* <ToastButton /> */}
      </Toast>
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton />
        <ToastButton />
      </Toast>
      {hello}
      {world} 이런식으로 사용하는건 리액트에서 지향하는 방향은 아니다.
      {/* props를넣어준부분 */}
    </div>
  );
}

export default App;
