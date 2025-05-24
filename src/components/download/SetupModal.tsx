
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import SetupContent from "./SetupContent";

interface SetupModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  downloadType: string;
}

const SetupModal = ({ isOpen, onOpenChange, downloadType }: SetupModalProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const setupContent = <SetupContent downloadType={downloadType} onClose={() => onOpenChange(false)} />;

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>DeskMate AI Setup</DrawerTitle>
            <DrawerDescription>Follow the steps to setup your assistant</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            {setupContent}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>DeskMate AI Setup</DialogTitle>
          <DialogDescription>Follow the steps to setup your assistant</DialogDescription>
        </DialogHeader>
        {setupContent}
      </DialogContent>
    </Dialog>
  );
};

export default SetupModal;
