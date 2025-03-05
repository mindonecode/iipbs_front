import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import UIForm from "."
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Input } from "@common/components/ui"



export default function Test (){
    
    const formSchema2= z.object({
        username: z.string().min(2).max(50),
    })
    
    const form = useForm<z.infer<typeof formSchema2>>({
      resolver: zodResolver(formSchema2),
      defaultValues: {
        username: "",
      },
    })
    
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema2>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      const formField = ()=>{
        return(
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                            <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                            This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
        )}
      />
     ) }

     const makeFromField= formField();

    return (
        <div>
            <UIForm form={form} onSubmit ={onSubmit} formField={makeFromField} ></UIForm>
         </div>
    )
}