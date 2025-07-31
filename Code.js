function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('EBD Retiree Health Benefits Estimator')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
