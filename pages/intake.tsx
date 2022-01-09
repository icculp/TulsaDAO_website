/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Intake (){
    return (
      <Html lang="en">
        <Head>
        
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-9HD8W29R89"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9HD8W29R89');`}}
            />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
          <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/nextparticle-documentation.js"></script>
        <script src="https://nextparticle.nextco.de/nextparticle.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/nextparticle-interaction.js"></script>
        </body>
      </Html>
    );
}