export const Menus = ({ menu }) => {
  const rendering = () => {
    for (let i = 0; i < menu.length; i++) {
      document.write(
        `오늘의 메인은 ${menu[i].main}, 사이드는 ${menu[i].side}입니다.`
      );
    }
  };
  console.log(rendering);
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <>{rendering()}</>
      {/* <ul>
        <li>
          오늘의 메인요리는 {menu[0].main}, 사이드는 {menu[0].side}입니다.
        </li>
        <li>
          오늘의 메인요리는 {menu[1].main}, 사이드는 {menu[1].side}입니다.
        </li>
        <li>
          오늘의 메인요리는 {menu[2].main}, 사이드는 {menu[2].side}입니다.
        </li>
        <li>
          오늘의 메인요리는 {menu[3].main}, 사이드는 {menu[3].side}입니다.
        </li>
      </ul> */}
    </>
  );
};
