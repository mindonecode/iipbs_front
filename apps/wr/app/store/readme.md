# Zustand store
## Zustand 등록방법 
**-- index.tsx --**
### context 등록
기본적으로 createContext를 통해 react에 context를 생성해서 react에서 사용할 수 있도록 해야함.
``` js
//StoreZus는 내부적으로 사용하기 위한 store파일에서 따로 생성함.
export type StoreApi = ReturnType<typeof StoreZus>
//react에서 사용하기 위한 context 생성.
export const StoreContext = createContext<StoreApi | undefined>(
  undefined,
)
```

### component로 작성
등록된 context를 component화 시키기 위한 작업
```js
//외부에서 호출시 <StoreProvider> 형태로 호출.
//app이나 home에서 전체적인 사용이 되도록 작성해야함.
export const StoreProvider = ({
  children,
}: StoreProviderProps) => {
  const storeRef = useRef<StoreApi>(null)
  if (!storeRef.current) {
    //StoreZus는 store.tsx를 봐야함.
    storeRef.current = StoreZus()
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}
```

### store 등록
react에서 사용하는 store에 현재 context 등록
```js
export const useWrStore = <T,>(
  selector: (store: WrStore) => T,
): T => {
  const storeContext = useContext(StoreContext)
  if (!storeContext) {
    throw new Error(`useStore must be used within StoreProvider`)
  }

  return useStore(storeContext, selector)
}
```

## Zustand 사용방법
**-- store.tsx, 폴더별 index.tsx --**
### 기본 store 생성
index.tsx의 context에 사용되는 StoreZus를 추가하여 사용됨.

외부에서 생성된 state, actions를 사용 가능한 구조
```js
import { createStore } from 'zustand/vanilla';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';//외부 파일 위치.
export type WrStore = tableType;//typescript이므로 사용되는 스크립트를 type1 & type2 형식으로 넣어야함.
//index.tsx에서 사용하는 store 생성.
export const StoreZus = (initState: tableState = tableStateExport) => {
  return createStore<WrStore>()((set) => {
    return {
        //아래에서 사용하는 state & actions은 외부 폴더에서 가져다가 사용.
      ...initState,//외부에 있는 기본 초기값 state
      ...tableActionsExport(set)//외부에 있는 actions
    }
  })
}
```
### 외부 스토어 작성 방법
외부 스토어는 export를 어떻게 할건지만 정하면됨.

사용하는 store.tsx에서 import를 받기만 하면 사용가능.
#### 타입을 외부로 빼는 방법
```js
export type tableState = {
    isInit: boolean;
    upHeadList: TableUpperProps[];
    publicReuseFacilityUper: PublicReuseFacility[];
}
type tableActions = {
    decrementList: () => void
}

export type tableType = tableState & tableActions;
```
#### 초기값 state를 외부로 빼는 방법
```js
export const tableStateExport:tableState= {
    isInit:false,
    upHeadList: upHeadList,
    publicReuseFacilityUper: publicReuseFacilityUper,
}
```
#### actions를 외부로 빼는 방법
```js
//tableActionsExport를 import 받아서 실행하여 return 된 값을 사용
export const tableActionsExport:(set:any)=>tableActions=
//set을 통해 react store에 등록
(set: any) => {
    return {
        //decrementList Object 형태로 전달
        decrementList:
        //set 함수를 실행해서 react store에 등록
        ()=>set(
            // store에 등록되는 함수 구조를 가지고 있음.
            (state:tableState) => {
                //actions 실질적인 로직 작성하는 곳.
            return (
            { 
                upHeadList: state.upHeadList, 
                publicReuseFacilityUper: 
                state.publicReuseFacilityUper.slice(0, state.publicReuseFacilityUper.length - 1)
            })}
        )
    }
}
```

