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
import Header from '@components/header';
import Layout from '@components/layout';
import Page from '@components/page';
import Intake_embed from '@components/intake_embed';
import { META_DESCRIPTION, TITLE } from '@lib/constants';

export default function Intake (){
  const meta = {
    title: TITLE,
    description: META_DESCRIPTION
  };

    return (
      <Page meta={meta}>
      <Layout>
        <Header hero="Contact" description={meta.description} />
        <Intake_embed />

      </Layout>
    </Page>
    );
}
