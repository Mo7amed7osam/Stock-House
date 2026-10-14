"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Current year, read on the client only so the prerendered shell
 * never bakes in a stale build-time value.
 */
export function CopyrightYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return year ? <span>{year} </span> : null;
}
