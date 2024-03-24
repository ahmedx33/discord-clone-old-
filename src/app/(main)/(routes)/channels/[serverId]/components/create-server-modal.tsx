"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { onClose } from "@/lib/store/features/modal-slice";
import { RootState } from "@/lib/store/store";

import { useDispatch, useSelector } from "react-redux";

import { FaCamera } from "react-icons/fa";
import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function CreateServerModal() {
    const { user, modal } = useSelector((state: RootState) => state);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const serverNameRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const createServerHandler = async () => {
        const newServerName = serverNameRef.current?.value.trim();

        if (newServerName === "") return toast.error("Please write server name!");

        const serverData = {
            name: newServerName,
            serverImg: "",
        };

        await axios.post("/auth/server/api/", serverData);
        toast.success("The server has been created successfully.");

        return dispatch(onClose());
    };

    return (
        <>
            <Dialog open={modal.isOpen} onOpenChange={() => dispatch(onClose())}>
                <DialogContent>
                    <DialogHeader className="flex items-center justify-center">
                        <DialogTitle>Create Your Server</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-center">
                        <div className="relative  rounded-full bg-transparent w-24 h-24 flex items-center justify-center  p-3 border border-white">
                            <Label htmlFor="file" className="absolute cursor-pointer">
                                <FaCamera size={30} />
                            </Label>
                            <Input id="file" type="file" className="p-3 rounded-full bg-transparent w-full h-full border border-white focus:outline-none hidden" />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="serverName">Server Name</Label>
                        <Input ref={serverNameRef} id="serverName" className="mt-2" type="text" defaultValue={`${user.value.displayName}'s server`} />
                    </div>
                    <DialogFooter>
                        <Button onClick={createServerHandler} className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
                            {" "}
                            Create
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
