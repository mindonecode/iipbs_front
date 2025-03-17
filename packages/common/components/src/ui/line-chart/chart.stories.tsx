import type { Meta, StoryObj } from "@storybook/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { fakerKO as faker } from "@faker-js/faker";

const meta: Meta<typeof Line> = {
  title: "Chart/Line",
  component: Line,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://react-chartjs-2.js.org/)
`,
      },
      source: {
        code: `
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fakerKO as faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

return (
  <div className="flex h-[20vw] w-[50vw] justify-center">
    <Line options={options} data={data} />
  </div>
);
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Line>;

export const Default: Story = {
  render: () => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
    );

    const options: ChartOptions<"line"> = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    };

    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];

    const data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };

    return (
      <div className="flex h-[20vw] w-[50vw] justify-center">
        <Line options={options} data={data} />
      </div>
    );
  },
};
