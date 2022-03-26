import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import usePieChart from '../../../hooks/usePieChart';
import { PieChartActivityCategoryArray } from '../../../types/journalItems/PieChart';

import styles from './PieChartActivityPie.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const COLOR_OPTIONS = [
  'rgba(237,185,185,1)',
  'rgba(185,215,237,1)',
  'rgba(231,233,185,1)',
  'rgba(220,185,237,1)',
  'rgba(185,237,224,1)',
  'rgba(143,35,35,1)',
  'rgba(35,98,143,1)',
  'rgba(143,106,35,1)',
  'rgba(107,35,143,1)',
  'rgba(79,143,35,1)',
  'rgba(0,64,255,1)',
  'rgba(106,255,0,1)',
  'rgba(255,212,0,1)',
  'rgba(255,0,170,1)',
  'rgba(0,149,255,1)',
  'rgba(191,255,0,1)',
  'rgba(255,127,0,1)',
  'rgba(170,0,255,1)',
  'rgba(0,234,255,1)',
  'rgba(255,255,0,1)',
  'rgba(255,0,0,1)',
  'rgba(0,0,0,1)',
  'rgba(115,115,115,1)',
  'rgba(204,204,204,1)',
];

enum PieChartView {
  activities = 'Activities',
  categories = 'Categories',
}

const PieChartActivityPie = () => {
  const { pieChart } = usePieChart();
  const { t } = useTranslation();
  const [view, setView] = useState<PieChartView>(PieChartView.activities);
  const [activities, setActivities] = isCurrent
    ? useState(pieChart?.currentActivities)
    : useState(pieChart?.idealActivities);

  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    if (isCurrent) {
      setActivities(pieChart?.currentActivities);
    } else {
      setActivities(pieChart?.idealActivities);
    }
  }, [isCurrent, pieChart]);

  useEffect(() => {
    if (activities) {
      if (activities.length > 0) {
        let labelList: string[] = [];
        let dataList: number[] = [];

        if (view === PieChartView.activities) {
          for (let i = 0; i < activities.length; i++) {
            labelList.push(activities[i].name);
            dataList.push(activities[i].hours);
          }
        } else if (view === PieChartView.categories) {
          labelList = PieChartActivityCategoryArray;
          dataList = [0, 0, 0, 0];
          for (let i = 0; i < activities.length; i++) {
            dataList[labelList.indexOf(activities[i].category)] += Number(
              activities[i].hours,
            );
          }
        }

        setLabels(labelList);
        setData(dataList);
      }
    }
  }, [view, pieChart, activities]);

  return (
    <div className={styles.pieContainer}>
      {activities != null && (
        <Pie
          data={{
            labels,
            datasets: [
              {
                backgroundColor: COLOR_OPTIONS,
                data,
              },
            ],
          }}
        />
      )}
      {activities != null && (
        <FormControl className={styles.view}>
          <FormLabel component="legend">
            {t('activity.piechart.filter')}
          </FormLabel>
          <RadioGroup
            aria-label="filter"
            name="filter"
            value={view}
            onChange={(e) => setView(e.target.value as PieChartView)}
            className={styles.formGroup}
          >
            <FormControlLabel
              value={PieChartView.activities}
              control={<Radio />}
              label="Activities"
              labelPlacement="end"
              classes={{ root: styles.formControlLabel }}
            />
            <FormControlLabel
              value={PieChartView.categories}
              control={<Radio />}
              label="Categories"
              labelPlacement="end"
              classes={{ root: styles.formControlLabel }}
            />
          </RadioGroup>
        </FormControl>
      )}
    </div>
  );
};

export default PieChartActivityPie;