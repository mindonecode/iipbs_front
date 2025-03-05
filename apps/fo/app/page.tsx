import type { ChartConfig } from "@common/business_components";
import { CHART_FORM, MainChart, SearchDiv, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@common/business_components";
import { Label } from "@common/business_components/ui/form/label";
import { Button } from "@common/components/ui";

/**
 * 차트 Form
 */
const chartForm = CHART_FORM.BAR;

/**
 * 차트 Data
 */
const chartData = [
  { label: "January", val: 186},
  { label: "February", val: 305},
  { label: "March", val: 237},
  { label: "April", val: 73},
  { label: "May", val: 209},
  { label: "June", val: 214},
]

/**
 * 차트 Config
 */
const chartConfig = chartData.reduce((config,element) => {
    config[element.label] = {
      label: element.label,
      color : "hsl(var(--chart-1))"
    };
    return config;

  }, {} as Record<string, { label: string; color: string; }>) satisfies ChartConfig;

interface SelectBox1 {
  text:string,
  val:string
}

const selectData1 : SelectBox1[] = [
  { text: "January", val: '00'},
  { text: "February", val: '01'},
  { text: "March", val: '03'},
  { text: "April", val: '04'},
  { text: "May", val: '05'},
  { text: "June", val: '06'},
]

export default function Home() {
  return (
    <div>
      <MainChart chartConfig={chartConfig} chartForm={chartForm} chartData={chartData}></MainChart>
      <SearchDiv>
          <Label>ddd</Label>
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {selectData1.map((data) => (
                <SelectItem key={data.val} value={data.val}>{data.text}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button>
            search
          </Button>
      </SearchDiv>
    </div>
  );
}
