import { FormField, FormUi } from "@common/business_components";
import { Input } from "@common/components";

export function WqForm(form: any) {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="grssClfg"
            render={({ field }) => (
              <FormUi label="총대장균군">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="tn"
            render={({ field }) => (
              <FormUi label="총질소">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="combResdch"
            render={({ field }) => (
              <FormUi label="결합잔류염소">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="tp"
            render={({ field }) => (
              <FormUi label="총인">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="trbt"
            render={({ field }) => (
              <FormUi label="탁도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="ph"
            render={({ field }) => (
              <FormUi label="수소이온농도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="bod"
            render={({ field }) => (
              <FormUi label="생물학적 산소요구량">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="clIonQnt"
            render={({ field }) => (
              <FormUi label="염화물">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="smll"
            render={({ field }) => (
              <FormUi label="냄새">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="cdtnv"
            render={({ field }) => (
              <FormUi label="전기전도도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="crmty"
            render={({ field }) => (
              <FormUi label="색도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="rmrk"
            render={({ field }) => (
              <FormUi label="비고">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>
    </>
  );
}
