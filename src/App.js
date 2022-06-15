import { Menus } from "./components/Menus";

const menuName = [
  {
    id: 0,
    main: "스테이크",
    side: "메쉬드포테이토",
  },
  {
    id: 1,
    main: "파스타",
    side: "치킨 샐러드",
  },
  {
    id: 2,
    main: "돼지국밥",
    side: "수육",
  },
  {
    id: 3,
    main: "초밥",
    side: "우동",
  },
];

function App() {
  return (
    <>
      <Menus menu={menuName} />
    </>
  );
}

export default App;

// export 함수 앞에 붙이니까 index에서 오류남
