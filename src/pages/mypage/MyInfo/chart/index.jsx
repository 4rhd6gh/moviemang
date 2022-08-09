import React, { useEffect } from "react";
import * as apis from "@service/apis/movieMang";
import Highcharts from "highcharts";

function Chart() {
  async function getChartData() {
    let response;
    let totalCNT = 0;
    try {
      response = await apis.requestAxios("get", "/user/playlistTags");
      totalCNT = response.data.tags.reduce((p, c) => p + c.CNT, 0);
      const tags = response.data.tags.map((tag, i) => {
        return { name: tag.tagName, y: (tag.CNT / totalCNT) * 100 };
      });
      drawChart(tags);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getChartData();
  }, []);

  function drawChart(tags) {
    Highcharts.chart("container", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        align: "left",
        text: null,
      },
      accessibility: {
        announceNewData: {
          enabled: false,
        },
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: null,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: false,
          },
        },
      },

      tooltip: {
        headerFormat: null,
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b>',
      },

      series: [
        {
          name: "Tags",
          colorByPoint: true,
          data: tags,
        },
      ],
    });
  }

  return (
    <div className="w-full mx-auto">
      <h1 className="text-xl mb-2 font-bold text-l text-textMainColor">
        나의 플레이리스트 태그 통계
      </h1>
      <figure className="highcharts-figure">
        <div id="container"></div>
      </figure>
    </div>
  );
}
export default React.memo(Chart);
