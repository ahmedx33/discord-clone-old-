"use client";

import axios from "axios";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { onClose } from "@/lib/store/slices/leave-server-modal-slice";

export default function LeaveServerModal() {
    const { isOpen, memberId } = useSelector((state: RootState) => state.leaveServerModal);
    const dispatch = useDispatch();

    const leaveServerHandler = async () => {
        try {
            await axios.patch(`/auth/server/[serverId]/leave/`);
        } catch (error) {
            return toast.error(`${error}`);
        } finally {
            router.push("channels")
        }
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={() => dispatch(onClose())}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure you want to leave ?</DialogTitle>
                    </DialogHeader>
                    <div>
                        <Button className="text-red-500" onClick={leaveServerHandler}>Leave</Button>
                        <Button variant="ghost">No</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
