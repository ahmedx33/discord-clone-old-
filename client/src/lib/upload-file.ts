import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


interface UploadFileProps {
    file: File | null,
    path: string,
    bucket: string
}

export async function uplaodFile({ file, path, bucket }: UploadFileProps) {


    const supabase = createClientComponentClient()
    const user = (await supabase.auth.getUser()).data.user

    if (!user ) return null
   

    const { data } = await supabase
        .storage
        .from(bucket)
        .upload(path, file as File, {
            cacheControl: '3600',
            upsert: false
        })

    console.log(data)

}