// path 저장해두고 렌더링이 되어야하는지
// props 전달받아서 구현되어야할 듯 한데 일단은 그냥 구현

const PLAYLISTS = {
  playLists: [
    {
      id: 1,
      title: "잔잔한 여운을 주는 영화 모음",
      description: "다 보고 나면, 여운이 오래 남는 영화 목록입니다.",
      nickname: "무비망좋아",
      representative_image_path: "/742vR63T1AcXzYwHypQpzZd89vh.jpg",
      tags: [
        { id: 1, name: "#스토리" },
        { id: 4, name: "#로맨스" },
      ],
      movie_count: 6,
      display: "enable",
      reg_date: "2022-04-23",
      mod_date: "2022-05-23",
    },
  ],
};

const baseURL = "https://image.tmdb.org/t/p/original";

export default function PlayListDetail() {
  const response = PLAYLISTS.playLists[0];

  console.log(response);

  return (
    <main className="text-white w-[1100px] mr-auto ml-auto mt-8">
      <section className="flex h-[400px] border-4 ">
        <img src={`${baseURL}${response.representative_image_path}`} alt="" />
        <div>details</div>
      </section>
      <section className="h-[200px] border-4 mt-4">
        플레이리스트 소개 섹션
      </section>
      <section className="w-full mt-4 border-4">
        <h2>영화 목록: 총 10편</h2>
        <div className="p-10 ">
          <ul className="flex flex-col gap-5">
            <li className="w-full h-[200px] border-4 rounded-lg">
              닥터스트레인지
            </li>
            <li className="w-full h-[200px] border-4">닥터스트레인지</li>
            <li className="w-full h-[200px] border-4">닥터스트레인지</li>
            <li className="w-full h-[200px] border-4">닥터스트레인지</li>
            <li className="w-full h-[200px] border-4">닥터스트레인지</li>
            <li className="w-full h-[200px] border-4">닥터스트레인지</li>
            <li className="w-full h-[200px] border-4">닥터스트레인지</li>
            <li className="w-full h-[200px] border-4">닥터스트레인지</li>
            <li className="w-full h-[200px] border-4 ">닥터스트레인지</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
