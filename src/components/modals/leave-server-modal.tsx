"use client";

import axios from "axios";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { onCloseLeave } from "@/lib/store/slices/leave-server-modal-slice";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LeaveServerModal() {
    const { isOpen, data } = useSelector((state: RootState) => state.leaveServerModal);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { serverId, memberId } = data;
    
    const dispatch = useDispatch();
    const router = useRouter();

    const leaveServerHandler = async () => {
        try {
            setIsLoading(true);
            await axios.patch(`/auth/server/${serverId}/leave/`, { memberId });
        } catch (error) {
            return toast.error(`${error}`);
        } finally {
            setIsLoading(false);
            dispatch(onCloseLeave());
            router.push("/channels");
        }
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={() => dispatch(onCloseLeave())}>
                <DialogContent>
                    <DialogHeader className="flex items-center justify-center">
                        <DialogTitle>Are you sure ?</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-between px-3">
                        <Button className="bg-red-500 hover:bg-red-600 text-white " onClick={leaveServerHandler} disabled={isLoading}>
                            {isLoading ? "Leaving..." : "Leave"}
                        </Button>
                        <Button variant="ghost" onClick={() => dispatch(onCloseLeave())} disabled={isLoading}>
                            No
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
