// TODO: fix hydration error (may be unrelated to this component)

import Script from "next/script";

export default function TwitterWidget() {
  return (
    <div>
      <a
        className="twitter-timeline"
        data-width="400"
        data-height="600"
        data-dnt="true" // opt out of twitter tracking
        data-theme="light"
        href="https://twitter.com/LabNotta?ref_src=twsrc%5Etfw"
      >
        Tweets by LabNotta
      </a>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </div>
  );
}
