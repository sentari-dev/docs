// Initialise ReDoc on the API Reference page.
//
// Material for MkDocs uses instant navigation (navigation.instant), which swaps
// page content via XHR without a full reload — so an inline <script> in page
// content never re-runs. `document$` is Material's per-navigation lifecycle
// observable; subscribing here re-initialises ReDoc on every page load,
// including soft navigations.
document$.subscribe(function () {
  var container = document.getElementById("redoc-container");
  if (!container || typeof Redoc === "undefined") return;
  if (container.dataset.rendered === "true") return;

  Redoc.init(
    container.dataset.spec,
    {
      // The published spec is filtered to public-safe paths by
      // scripts/docs-sync-openapi.sh; still hide the one-click raw download so
      // the served JSON isn't offered as a bulk artifact.
      hideDownloadButton: true,
      expandResponses: "200,201",
      requiredPropsFirst: true,
      theme: { typography: { fontSize: "15px" } },
    },
    container
  );
  container.dataset.rendered = "true";
});
