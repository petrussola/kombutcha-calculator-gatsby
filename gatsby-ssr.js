const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== "production") return;

  const publisherId = process.env.ADSENSE_ID;
  if (!publisherId) return;
  if (!/^ca-pub-\d+$/.test(publisherId)) {
    throw new Error("ADSENSE_ID must be a valid ca-pub- publisher ID");
  }

  setHeadComponents([
    React.createElement("script", {
      key: "adsense-auto-ads",
      async: true,
      src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`,
      crossOrigin: "anonymous",
    }),
  ]);
};
