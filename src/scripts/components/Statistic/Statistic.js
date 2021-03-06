import React from 'react';
import StatisticItem from "./StatisticItem";
import './Statistic.css';

const createStatistics = ({statisticData}) => {
  const elements = statisticData.map((item) => {
    const {...itemProps} = item;

    return (
      <li className="list-group-item">
        <StatisticItem
          {...itemProps}
        />
      </li>
    );
  });

  return (
    <div className="statistics">
      <h3>Score table:</h3>
      <ol className="list-group statistic-list">
        {elements}
      </ol>
    </div>
  );
}
export default createStatistics;