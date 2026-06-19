"use client";

import React from "react";
import Xarrow from "react-xarrows";

export default function HeroArrows({ leftFeatures, rightFeatures, getColor }) {
  return (
    <>
      {leftFeatures.map((feat, idx) => (
        <Xarrow
          key={`left-${idx}`}
          start={`left-dot-${idx}`}
          end="center-hub"
          showHead={false}
          strokeWidth={1.2}
          color={getColor(feat.dotColor)}
          path="smooth"
          curveness={0.35}
          startAnchor="right"
          endAnchor="left"
        />
      ))}
      {rightFeatures.map((feat, idx) => (
        <Xarrow
          key={`right-${idx}`}
          start={`right-dot-${idx}`}
          end="center-hub"
          showHead={false}
          strokeWidth={1.2}
          color={getColor(feat.dotColor)}
          path="smooth"
          curveness={0.35}
          startAnchor="left"
          endAnchor="right"
        />
      ))}
    </>
  );
}
