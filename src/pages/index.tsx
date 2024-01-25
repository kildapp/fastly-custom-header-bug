export default function Home() {
  return (
    <div>
      <h1>Bug Report</h1>
      <p>
        If you start this project with <code>`npm run dev`</code> or{" "}
        <code>`npm run build && npm run start`</code>, then the custom headers will be present in the response.
      </p>
      <p>
        If you instead start it with <code>`npm run fastly-serve`</code>, the custom headers will be absent.
      </p>

    </div>
  );
}
