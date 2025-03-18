import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./lib/form"
import { Input } from "@common/components/ui"
import { UiForm } from "."



export default function Test (){
    
    const formSchema= z.object({
        username: z.string().min(2).max(50),
    })
    
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
    
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
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
            <UiForm form={form} onSubmit ={onSubmit} formField={makeFromField} ></UIForm>
         </div>
    )
}