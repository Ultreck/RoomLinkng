"use client";

import React, { useState } from "react";
import PayoutCard from "./PayoutCard";
import useParamHook from "@/hooks/use-param-hook";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { slideVariants } from "@/lib/helper";
import AddBankAccountForm from "../Payments/AddBankAccountForm";

const PayoutSettin = () => {
  const { mode } = useParamHook({ key: "payout" });
  console.log(mode);
  const [currentIndex] = useState<number>(0);
  const [direction] = useState(1);

  return (
    <AnimatePresence custom={direction} mode="wait">
      <MotionConfig>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {!mode && <PayoutCard />}
          {mode && <AddBankAccountForm />}
        </motion.div>
      </MotionConfig>
    </AnimatePresence>
  );
};

export default PayoutSettin;
