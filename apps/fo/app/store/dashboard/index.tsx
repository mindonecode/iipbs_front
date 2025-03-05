
export type SelectDataType = {
    text: string;
    val: string;
}
const selectData1:SelectDataType[] = [
    { text: "January", val: '00'},
    { text: "February", val: '01'},
    { text: "March", val: '03'},
    { text: "April", val: '04'},
    { text: "May", val: '05'},
    { text: "June", val: '06'},
]

const selectData2:SelectDataType[] = [
    { text: "January", val: '00'},
    { text: "February", val: '01'},
    { text: "March", val: '03'},
    { text: "April", val: '04'},
    { text: "May", val: '05'},
    { text: "June", val: '06'},
]

const labelArray:string[] = ['구분', '시도', '시군구'];


export type DashBoardType = {
    DashBoard: {
        isInit: boolean;
        selectData1: SelectDataType[];
        selectData2: SelectDataType[];
        labelArray:string[];
    }
}
export type DashBoardActions = {
    DashBoardActions: {
        labelChange:()=>void;
    }
}
export type DashBoardStore = DashBoardType & DashBoardActions;

export const dashInitState:DashBoardType = {
    DashBoard: {
        isInit: false,
        selectData1: selectData1,
        selectData2: selectData2,
        labelArray: labelArray
    }
}

export const dashBoardReducer:(set:any)=>DashBoardActions=(set: any) => {

    console.log("tableActionsExport");
    return {
        DashBoardActions: {
            labelChange:()=>set(
                (state:DashBoardType) => {
                    state.DashBoard.labelArray[0] = "구분 변경";
                return (
                { 
                    DashBoard: {
                        ...state.DashBoard,
                        labelArray: state.DashBoard.labelArray
                    
                }})}
            )
        }
    }
}
