
import { Button } from "@common/components/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";



export function ToastFormUi(body:string,title:string,url:string,buttonName:string){

  //const router = useRouter();

    return(

      toast.custom((t) => (
      
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          }  w-4/12 h-40 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="w-full flex-1 py-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
          
              </div>
              <div className="ml-3  flex-1">
                <p className="text-xl font-medium  underline">
                {title}
                </p>
                <p className="mt-1 text-2xl">
                  {body}
                </p>
              </div>
            </div>
          </div>
          <div className="flex py-20">
            <Button
              size='sm'
              onClick={() => toast.dismiss(t.id)}
            >
              <Link href={url}> {buttonName}</Link>
            </Button>
          </div>
          <div className="flex  pl-4 pr-4 py-20">
            <Button
              onClick={() => toast.dismiss(t.id)}
              size='sm'
            >
              닫기
            </Button>
          </div>
        </div>
      ))
    )
}