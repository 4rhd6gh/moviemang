import React from "react";
import { useParams } from "react-router-dom";

export default function PlayListDetail() {
  const { playlistId } = useParams();

  return (
    <main className="text-white w-[1100px] mr-auto ml-auto mt-8">
      <section className="flex">{playlistId}</section>
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
