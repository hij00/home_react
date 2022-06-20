import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Gage,
  GageWrap,
  Icons,
  IconWrap,
  NicName,
  Pause,
  Play,
  Title,
  TitleWrap,
  WrapM,
} from "../../style/eventMe";

export const EventMe = () => {
  const [play, setPlay] = useState("block");
  const [pause, setPause] = useState("none");

  const handlePlay = () => {
    setPlay("none");
    setPause("block");
  };

  const handlePause = () => {
    setPlay("block");
    setPause("none");
  };

  const a = false;
  console.log(a);

  return (
    <WrapM>
      <TitleWrap>
        <Title>
          <h3>[vlog] 하루종일 코딩만 하는 하루를 살아보았다.</h3>
        </Title>
        <NicName>hijeong_</NicName>
      </TitleWrap>
      <IconWrap>
        <Icons>
          <FontAwesomeIcon icon={faBackwardStep} />
        </Icons>

        <Play show={play} onClick={handlePlay}>
          Play
        </Play>

        <Pause showw={pause} onClic={handlePause}>
          Pause
        </Pause>
        <Icons>
          <FontAwesomeIcon icon={faForwardStep} />
        </Icons>
      </IconWrap>
      <GageWrap>
        <Gage></Gage>
      </GageWrap>
    </WrapM>
  );
};
