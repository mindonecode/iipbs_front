## form 모듈

### 공통 모듈 중 chart를 다양한 테마로 적용시킬 수 있도록 해주는 모듈

&emsp; 1. 폼 모듈 사용법

&emsp; &emsp; 1-1) 패키지 사용법

&emsp; &emsp; &emsp; (1) zod 사용법
https://zod.dev/?id=introduction

&emsp; &emsp; 1-2) 호출방법

&emsp; &emsp; &emsp; (1) form에 필요한 Form,FormField,useForm useForm,z, zodResolver import

```js
import {
  Form,
  FormField,
  SelectBox,
} from "@common/business_components/ui";
import { Input } from "@common/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormUi } from "@common/business_components";
```

&emsp; &emsp; &emsp; (2)zod 정의

```js
const formSchema = z.object({
  facilityName: z.string().min(2).max(50),
  instlCmptnDt:z.string(), // FormField 내 name의 타입및 min max 구성 가능

});


const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      //초기값 세팅 z.object에 등록한 값은 반드시 세팅해야함.
      defaultValues: {
          facilityName :'',
          instlCmptnDt:'', //

        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // form submit 함수
        console.log(values);// zod.object에 등록하고 form에 구현한 값이 출력됨.
    }



```

&emsp; &emsp; &emsp; (3) form구성

```js
 <Form  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
                <div   className="col-span-3 pl-6" >
                      <FormField
                        control={form.control}
                        name="grntchCstSprtYn" //zodobject에 등록한 값 삽입
                        render={({ field }) => (

                            // zod에 등록된 name 값의 폼 객체 생성
                             //select box 삽입시
                          <FormUi label="인증여부">
                          <SelectBox className={""} selectClass={selectClass} label={""} selectArray={rain.selectYN} onSelectValue={onSelectValue} {...field}/>
                          </FormUi>
                        )}
                      />
                </div>
                <div   className="col-span-3" >
                      <FormField
                        control={form.control}
                        name="grntchBdstCertYr"
                        render={({ field }) => (

                            // zod에 등록된 name 값의 폼 객체 생성
                             //input 삽입시
                          <FormUi label="인증년도">
                          <Input className="" placeholder="2024" type="" {...field} />
                         </FormUi>
                        )}
                      />
                </div>
        </form>
      </Form>
```
