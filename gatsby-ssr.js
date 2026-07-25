import React from "react"
import asFavicon from "./src/images/AS.png"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon" rel="icon" type="image/png" href={asFavicon} />,
  ])
}