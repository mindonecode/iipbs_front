import { TableHead, TableRow } from "@common/components/ui";
import type { TableUpperProps } from "../../store/dashboard";

const HeadMakeColSpan = ({ upHeadList }: { upHeadList: TableUpperProps[] }) => {
    return (<>
        <TableRow>{
            upHeadList.map((head: TableUpperProps) =>
            (head.id === 'publicMethod' ? <TableHead rowSpan={2} className="w-1/16" key={head.id}>{head.title}</TableHead> :
                !head.upSequnce && head.id != 'facilityCapacity' && head.id != 'planInputWaterQlty' && head.id != 'designInputWaterQlty' ? <TableHead rowSpan={2} key={head.id}>{head.title}</TableHead> :
                    head.id == 'facilityCapacity' || head.id == 'planInputWaterQlty' || head.id == 'designInputWaterQlty' ? <TableHead rowSpan={2} className="w-13" key={head.id}>{head.title}</TableHead> :
                        head.upName === 'upChangeRe' && head.upSequnce === 1 ? <TableHead className="w-75" key={head.id} rowSpan={1} colSpan={2}>{'행정구역'}</TableHead> : null))}
        </TableRow>
        <TableRow>
            {upHeadList.map((head: TableUpperProps, idx) => {
                if (head.upName === 'upChangeRe') {
                    if (idx == 1) {
                        return <TableHead key={head.id} className="w-36">{head.title}</TableHead>;
                    }
                    else {
                        return <TableHead key={head.id} className="w-40">{head.title}</TableHead>;
                    }
                }
            })}
        </TableRow>
    </>)
}

export { HeadMakeColSpan };
