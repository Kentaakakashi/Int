/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Index from "@/pages/Index";

export default function App() {
  return (
    <>
      {/* Global Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="
            absolute
            top-0
            left-[-10%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-white/[0.03]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-white/[0.02]
            blur-[180px]
          "
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10"
      >
        <Index />
      </motion.div>
    </>
  );
}
