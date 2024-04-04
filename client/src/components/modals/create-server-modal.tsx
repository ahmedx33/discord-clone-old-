"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {v4 as uuidv4} from "uuid"

import { onClose } from "@/lib/store/slices/create-server-modal-slice";
import { RootState } from "@/lib/store/store";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { FaCamera } from "react-icons/fa";

import { ChangeEvent, useRef, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { uplaodFile } from "@/lib/upload-file";
import Image from "next/image";

export default function CreateServerModal() {
    const { user, createServerModal } = useSelector((state: RootState) => state);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [serverImgUrl, setServerImgUrl] = useState<string>("")

    const router = useRouter();

    const serverNameRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const uploadImgHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.files?.item(0)) {
                const file = e.target.files.item(0);

                const data = {
                    file: file,
                    bucket: "servers",
                    path: `serverImg-${uuidv4()}`,
                };

                const req = await uplaodFile(data)
                setServerImgUrl(req?.path as string)
                
            }
        } catch (error) {
            throw new Error(`${error}`);
        }
    };

    const createServerHandler = async () => {
        try {
            setIsLoading(true);

            const newServerName = serverNameRef.current?.value.trim();

            if (newServerName === "") return toast.error("Server name cannot be empty.");

            const serverData = {
                name: newServerName,
                serverImg: `https://ecsgjdvnggcyvhhseqso.supabase.co/storage/v1/object/public/servers/${serverImgUrl}`,
            };

            await axios.post("/api/server/", serverData);

            router.refresh();
            toast.success("The server has been created successfully.");

            return dispatch(onClose());
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong! Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Dialog open={createServerModal.isOpen} onOpenChange={() => dispatch(onClose())}>
                <DialogContent>
                    <DialogHeader className="flex items-center justify-center">
                        <DialogTitle>Create Your Server</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-center">
                        <div className="relative  rounded-full bg-transparent w-24 h-24 flex items-center justify-center  p-3 border border-white overflow-hidden">
                            <Label htmlFor="file" className="absolute cursor-pointer">
                                {serverImgUrl !== "" ? <Image src={`https://ecsgjdvnggcyvhhseqso.supabase.co/storage/v1/object/public/servers/${serverImgUrl}`} alt="icon" width={90} height={90}/> : <FaCamera size={30} />}
                            </Label>
                            <Input
                                onChange={uploadImgHandler}
                                id="file"
                                type="file"
                                className="p-3 rounded-full bg-transparent w-full h-full border border-white focus:outline-none hidden"
                                disabled={isLoading}
                                accept="image/*"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="serverName">Server Name</Label>
                        <Input ref={serverNameRef} id="serverName" className="mt-2" type="text" defaultValue={`${user.value.displayName}'s server`} disabled={isLoading} />
                    </div>
                    <DialogFooter>
                        <Button onClick={createServerHandler} className="bg-[#5865F2] text-white hover:bg-[#4752C4]" disabled={isLoading}>
                            {isLoading ? "Creating..." : "Create"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
