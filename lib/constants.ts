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

export const SITE_URL = 'https://tulsadao.org';
export const TITLE = 'TulsaDAO';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'tulsadao';
export const BRAND_NAME = 'TulsaDAO';
export const SITE_NAME_MULTILINE = ['Tulsa', 'DAO'];
export const SITE_NAME = 'TulsaDAO';
export const META_DESCRIPTION =
  'TulsaDAO, a DAO for Tulsans to get involved in the digial assets space.';
export const SITE_DESCRIPTION =
  'Mission driven, member-owned, autonomous and transparent; a self-organizing entity focused on fostering coordination, education, and economic activity within the digital assets space for the greater benefit of Tulsa.';
export const DATE = 'October 27, 2022';
export const SHORT_DATE = 'Oct 27 - 9:00am PST';
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/icculp/tulsa-dao-website';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: "home",
    route: "/"
  },
  {
    name: "intake",
    route: "/intake"
  },
  {
    name: "contact",
    route: "/contact"
  },
]


// [
//   {
//     name: 'Stage A',
//     route: '/stage/a'
//   },
//   {
//     name: 'Stage C',
//     route: '/stage/c'
//   },
//   {
//     name: 'Stage M',
//     route: '/stage/m'
//   },
//   {
//     name: 'Stage E',
//     route: '/stage/e'
//   },
//   {
//     name: 'Schedule',
//     route: '/schedule'
//   },
//   {
//     name: 'Speakers',
//     route: '/speakers'
//   },
//   {
//     name: 'Expo',
//     route: '/expo'
//   },
//   {
//     name: 'Jobs',
//     route: '/jobs'
//   }
// ];

export type TicketGenerationState = 'default' | 'loading';
