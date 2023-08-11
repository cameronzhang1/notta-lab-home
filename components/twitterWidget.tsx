// TODO: fix hydration error (seems to be needing the script to move to header?)
// https://stackoverflow.com/questions/36852946/twitter-widget-not-always-loading

import Head from "next/head";

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
      <Head>
      <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
    </div>
  );
}
