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
import { SocialIcon } from 'react-social-icons';
import Header from '@components/header';
import Layout from '@components/layout';
import Page from '@components/page';
import { META_DESCRIPTION, TITLE } from '@lib/constants';

export default function Contact (){

  const socialProps = {
    width: "1000px",
    height: "1000px", 
    target: "_blank",
  }
  const meta = {
    title: TITLE,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Contact" description={meta.description} />

        <SocialIcon url="https://twitter.com/tulsadao" {...socialProps} />
        <SocialIcon url="https://linkedin.com/in/tulsadao" {...socialProps} />
        <SocialIcon url="https://discord.gg/okie" {...socialProps} />
        <SocialIcon url="https://www.facebook.com/groups/2535157100090498" {...socialProps} />
        <SocialIcon url="https://www.github.com/icculp/tulsadao" {...socialProps} />
        <SocialIcon url="mailto" {...socialProps} />
        <SocialIcon url="https://www.instagram.com/tulsadao" {...socialProps} />


        <div class="container mt-5 mb-5 d-flex justify-content-center">
    <ul class="social-list">
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 facebook">
                        <div class="social-icon"> <i class="fa fa-facebook fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center facebook">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Facebook</small> </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 instagram">
                        <div class="social-icon"> <i class="fa fa-instagram fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center instagram">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Instagram</small> </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 youtube">
                        <div class="social-icon"> <i class="fa fa-youtube fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center youtube">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Youtube</small> </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 whatsapp">
                        <div class="social-icon"> <i class="fa fa-whatsapp fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center whatsapp">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Whatsapp</small> </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 pinterest">
                        <div class="social-icon"> <i class="fa fa-pinterest fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center pinterest">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Pinterest</small> </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>


      </Layout>
    </Page>
  );
}
