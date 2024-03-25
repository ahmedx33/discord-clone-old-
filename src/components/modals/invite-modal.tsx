import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

import { onClose, setServerData } from "@/lib/store/slices/invite-modal-slice";

import { IoCopyOutline } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

import { useState } from "react";
import { useOrigin } from "@/hooks/use-orgin";

import {v4 as uuidv4} from "uuid"

import axios from "axios";

export default function InviteModal() {
    const { isOpen, server } = useSelector((state: RootState) => state.inviteModal);

    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useDispatch();
    const origin = useOrigin();

    const inviteLink = `${origin}/invite/${server?.inviteLink}`;

    const copyHandler = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(inviteLink);

        setTimeout(() => {
            setIsCopied(false)
        }, 1000)
    };


    const generateLinkHandler = async () => {
        try {
            setIsLoading(true)
            
            const data = {
                inviteLink: uuidv4()
            }
            
            const res = await axios.patch(`/auth/server/${server.id}/invite/`, data)
            
            dispatch(setServerData(res.data))
        } catch(error) {
            throw new Error(`[GENERATE_PATCH] ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Dialog open={isOpen} onOpenChange={() => dispatch(onClose())}>
                <DialogContent>
                    <DialogHeader className="flex items-center justify-center">
                        <DialogTitle>Server invite link</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center gap-x-4">
                        <Input id="serverName" className="mt-2" type="text" value={inviteLink} />
                        {!isCopied ? <IoCopyOutline onClick={copyHandler} size={20} className="cursor-pointer"/> : <FaCheck size={20} className="cursor-pointer"/>}
                    </div>
                    <DialogFooter className="flex items">
                        <div className="flex items-center w-full">
                            <Button variant="link" onClick={generateLinkHandler}> Generate a new invite link</Button>
                            <IoMdRefresh size={20} />
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
