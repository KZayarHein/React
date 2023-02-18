import React from "react";
import SideBar from "./assets/components/SideBar";
import Card from './assets/components/Card';





const Content = () => {
  const cards = [
    {
      id: 1,
      profile:
        "https://yt3.googleusercontent.com/ytc/AL5GRJX6dldwVxhfCN5HPKbtHqcY9lru8nXdP93uIK1__w=s88-c-k-c0x00ffffff-no-rj",
      title:
        "Learn English Live 24/7 with EnglishClass101",
      chanel: "Learn English with EnglishClass101.com",
      thumbnail:
        "https://i.ytimg.com/vi/6JP9akIOw-0/hqdefault_live.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-QRrMuCk02zp4NXhl4t9eILtLig",
      viewers: "10K views",
      time: "3 hours ago",
    },
    {
      id: 2,
      profile:
        "https://yt3.googleusercontent.com/ytc/AL5GRJXFueDE80WibgwIh9K7CLC_YmkJP3KC6atY8lsgg_c=s88-c-k-c0x00ffffff-no-rj",
      title:
        "Learn Japanese Live 24/7 with JapanesePod101",
      chanel: "Learn Japanese with JapanesePod101.com",
      thumbnail:
        "https://i.ytimg.com/vi/r4IIGxAcRpg/hqdefault_live.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxiA6mt2ihlKuG9rMFsxFa8qEJKg",
      viewers: "6K views",
      time: "5 hours ago",
    },
    {
      id: 3,
      profile:
        "https://yt3.googleusercontent.com/ytc/AL5GRJWBWUFdKzV57BCapp3zkk8ICiMB7fugor0iSHJ4-g=s88-c-k-c0x00ffffff-no-rj",
      title:
        "The Secret To a Happy Life | Robert Waldinger | TED",
      chanel: "TED",
      thumbnail:
        "https://i.ytimg.com/vi/IStsehNAOL8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYLP7bQA9G7r_NCOEGAnOW2UqX2A",
      viewers: "603K views",
      time: "1 month ago",
    },
    {
      id: 4,
      profile:
        "https://yt3.googleusercontent.com/ytc/AL5GRJURaY2qvmr9kgHLV-Ez-4gzFuawQrYaH8HvIBDv=s88-c-k-c0x00ffffff-no-rj",
      title:
        "「音楽・歌のエピソードまとめ」特別映像 ",
      chanel: "[Anime] Atashin'chi Official Channel",
      thumbnail:
        "https://i.ytimg.com/vi/riljLpt-VLA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgg6NoyvOspnsQWLxNstYmmlMH2w",
      viewers: "213K views",
      time: "7 days ago",
    },
    {
      id: 5,
      profile:
        "https://yt3.googleusercontent.com/ytc/AL5GRJWIPw3Iq6NN1MWy9a6U-4P2der0Y7Ext7VA6_RovA=s88-c-k-c0x00ffffff-no-rj",
      title:
        "The Psychology of Fonts | Fonts that evoke Emotion",
      chanel: "Envato Tuts+",
      thumbnail:
        "https://i.ytimg.com/vi/6Jlo9iOZvXY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF--rBS-lBuJe7bcECXqAvalhrZg",
      viewers: "5.3K views",
      time: "1 day ago",
    },
    {
      id: 6,
      profile:
        "https://yt3.googleusercontent.com/ytc/AL5GRJVeTYme436DBtPcdCiDCKpR1586IaSJDppwoxiE4w=s88-c-k-c0x00ffffff-no-rj",
      title:
        "6 Tools for Beautiful Background in Adobe Illustrator",
      chanel: "Dansky",
      thumbnail:
        "https://i.ytimg.com/vi/uGg1F1HoWRo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDa72LMtXY4oxnppEam_55RCwfyeg",
      viewers: "5.3K views",
      time: "1 day ago",
    },
    {
      id: 7,
      profile:
        "https://yt3.googleusercontent.com/PMjmE7P_7TLsRqRWQV5Omz_nJGu2VRD6pupUs2AQJUk-VhmmTyKCS7yGP4w5Hj_pTt74PVEE=s88-c-k-c0x00ffffff-no-rj",
      title:
        "Why the Marriage System Collapsed | Part-2 ",
      chanel: "Japanese Comedian Meshida",
      thumbnail:
        "https://i.ytimg.com/vi/3ksgtVyvsqw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu0DCyQf-YmN_a10M2HvKybszs8A",
      viewers: "6.4K views",
      time: "4 days ago",
    },
    {
      id: 8,
      profile:
        "https://yt3.googleusercontent.com/8w7iP2V5IOvIssQ4VI9ljbzvCfyUJVDjE16qvAzxeqdKhs8HqW7AyZrhZVXUBJhC-fjQ_nD-DVg=s88-c-k-c0x00ffffff-no-rj",
      title:
        "Why the Marriage System Collapsed | Part-2 ",
      chanel: "EA SPROTS FIFA",
      thumbnail:
        "https://i.ytimg.com/vi/k8m9plRwMgk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASZWC3DOFY0bRSvpQcXaaiLkTP5Q",
      viewers: "2.2M views",
      time: "3 months ago",
    },
  ];
  return (
    <>
      <main>
        <section className="mt-5 pt-5">
          <div className=" container-fluid">
            <div className="row">
              <div className="col-lg-3 scroll">
              <SideBar datas = {cards}/>
              </div>
              <div className="col-lg-9">
              <div className="row gx-3 gy-5">
              {cards.map(card => (
                <Card key={card.id} data={card}/>
              ))}
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Content;


