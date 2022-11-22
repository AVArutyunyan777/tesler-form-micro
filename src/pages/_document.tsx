import { Html, Head, Main, NextScript } from 'next/document';
import {Provider} from "@tesler-ui/core";
import {epics} from "../epics";
import {reducers} from "src/reducers";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>

  );
}
