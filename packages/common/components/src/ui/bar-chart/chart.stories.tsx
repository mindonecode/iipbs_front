import type { Meta, StoryObj } from "@storybook/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { fakerKO as faker } from "@faker-js/faker";
import { getCssVariableValue } from "../../lib/utils";

const meta: Meta<typeof Bar> = {
  title: "Chart/Bar",
  component: Bar,
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
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { fakerKO as faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
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
      data: labels.map(() => faker.number.int({ min: 10, max: 100 })),
      backgroundColor: labels.map((_, i) =>
        getCssVariableValue(\`--chart-\${i + 1}\`),
      ),
    },
  ],
};

return (
  <div className="flex h-[20vw] w-[50vw] justify-center">
    <Bar options={options} data={data} />
  </div>
);
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Bar>;

export const Default: Story = {
  render: () => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
    );

    const options: ChartOptions<"bar"> = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart",
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
          data: labels.map(() => faker.number.int({ min: 10, max: 100 })),
          backgroundColor: labels.map((_, i) =>
            getCssVariableValue(`--chart-${i + 1}`),
          ),
        },
      ],
    };

    return (
      <div className="flex h-[20vw] w-[50vw] justify-center">
        <Bar options={options} data={data} />
      </div>
    );
  },
};
