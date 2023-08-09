export default function TwitterFeed() {
  return (
    <>
      <a
        className="twitter-timeline"
        data-width="400"
        // TODO: make height responsive to other column height
        data-height="500"
        href="https://twitter.com/LabNotta?ref_src=twsrc%5Etfw"
      >
        Tweets by LabNotta
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
      ></script>
    </>
  );
}
