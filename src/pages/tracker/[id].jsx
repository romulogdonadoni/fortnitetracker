import Image from "next/image";
import FortniteBattlePassImage from "../../assets/FortniteBattlePassImage.webp";
import * as Progress from "@radix-ui/react-progress";
import { useEffect, useState } from "react";
import { PlayerStats } from "@/styles/pages/tracker/PlayerStats";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";

export default function Tracker({ response }) {
  const battlePass = response?.data?.battlePass;
  const soloStats = response?.data?.stats?.all?.solo;
  const overAllStats = response?.data?.stats?.all?.overall;
  console.log(overAllStats);
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    const battlePassProgress = parseInt(battlePass?.progress);

    const timer = setTimeout(() => setProgress(battlePassProgress), 100);
    return () => clearTimeout(timer);
  }, [battlePass]);
  return (
    <PlayerStats>
      <div className="Head">
        <h1>{response?.status == 200 ? response?.data?.account?.name : response?.error}</h1>
        <Image src={FortniteBattlePassImage} height={128} alt="" />
        <h1>Nível:{battlePass?.level}</h1>
        <Progress.Root className="ProgressRoot" value={progress}>
          <Progress.Indicator className="ProgressIndicator" style={{ transform: `translateX(-${100 - progress}%)` }} />
        </Progress.Root>
      </div>
      <div className="List">
        <div>
          <div>Vitórias:{overAllStats?.wins}</div>
          <div>XP:{overAllStats?.score}</div>
          <div>XP por minuto:{overAllStats?.scorePerMin}</div>
          <div>XP por partida:{overAllStats?.scorePerMatch}</div>
          <div>Taxa de vitória {overAllStats?.winRate}</div>
        </div>
        <div>
          <div>Horas Jogadas {parseInt(overAllStats?.minutesPlayed / 60)}h</div>
          <div>Top3 {overAllStats?.top3}</div>
          <div>Top5 {overAllStats?.top5}</div>
          <div>Top10 {overAllStats?.top10}</div>
          <div>Top25 {overAllStats?.top25}</div>
        </div>
        <div>
          <div>Eliminações{overAllStats?.kills}</div>
          <div>Mortes {overAllStats?.deaths}</div>
          <div>Partidas {overAllStats?.matches}</div>
          <div>KD {overAllStats?.kd}</div>
          <div>Jogadores revividos {overAllStats?.playersOutlived}</div>
        </div>
      </div>
    </PlayerStats>
  );
}
export async function getServerSideProps(context) {
  console.log(context.params.id);
  const response = await fetch(`https://fortnite-api.com/v2/stats/br/v2/?name=${context.params.id}`, {
    headers: {
      Authorization: "13430738-74a6-4906-add8-ab61c70293c3",
    },
  }).then((res) => {
    return res.json();
  });
  return {
    props: {
      response,
    },
  };
}
