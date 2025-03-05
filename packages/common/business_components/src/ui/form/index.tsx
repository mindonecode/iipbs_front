

import { Button } from "@common/components"
import { Form } from "./lib/form"

  interface UiFormProps {
    onSubmit: object
    form: any;
    formField: React.ReactNode
  }

 /* formField -> 예시 코드
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
          />*/

export  function UiForm(uiFormProps: UiFormProps) {

  const {onSubmit, form, formField} = uiFormProps;  
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {formField}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
    }


