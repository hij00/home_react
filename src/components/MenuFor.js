export const MenuFor = ({ menu }) => {
  for (let i = 0; i < menu.length; i++) {
    document.write(
      `오늘의 메인은 ${menu[i].main}, 사이드는 ${menu[i].side}입니다.${"<br/>"}`
    );
  }
};
