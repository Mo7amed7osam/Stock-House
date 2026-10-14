"use client";

import { useCallback, useRef, useState, type MouseEvent } from "react";

/** Native <dialog> modal: focus trap, Esc to close and focus restore come from the browser. */
export function useDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    ref.current?.showModal();
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    ref.current?.close();
  }, []);

  const dialogProps = {
    ref,
    onClose: () => setIsOpen(false),
    // Click on the backdrop (the dialog element itself) closes it
    onClick: (e: MouseEvent<HTMLDialogElement>) => {
      if (e.target === e.currentTarget) close();
    },
  };

  return { open, close, isOpen, dialogProps };
}
