export default function SmoothScroller(props) {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">{props.children}</div>
      </div>
    </>
  );
}
