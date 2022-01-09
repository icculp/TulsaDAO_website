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

import { useState } from 'react';
import { PageState, ConfDataContext, UserData } from '@lib/hooks/use-conf-data';


type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Intake_embed() {
//   defaultUserData,
//   sharePage,
//   defaultPageState = 'registration'
// }: Props) {
//   const [userData, setUserData] = useState<UserData>(defaultUserData);
//   const [pageState, setPageState] = useState<PageState>(defaultPageState);
//   static defaultProps = {profileStore:{}}
  const iframeProps = {
    "id": "intake",
    "title": "intake",
  }
  return(
    
    <iframe {...iframeProps} src="https://docs.google.com/forms/d/e/1FAIpQLSdwQyXaCS8VI_s9BvcF28A1maBqtke04r66h7MxidPtJ6xVQw/viewform?embedded=true" >Loading intake form…</iframe>
    
    // <ConfDataContext.Provider
    //   value={{
    //     userData,
    //     setUserData,
    //     setPageState
    //   }}
    // >
    //   <Layout>
    //     <ConfContainer>
    //       {pageState === 'registration' && !sharePage ? (
    //         <>
    //           <Hero />
    //           <Form />
    //           <LearnMore />
    //         </>
    //       ) : (
    //         <Ticket
    //           username={userData.username}
    //           name={userData.name}
    //           ticketNumber={userData.ticketNumber}
    //           sharePage={sharePage}
    //         />
    //       )}
    //     </ConfContainer>
    //   </Layout>
    // </ConfDataContext.Provider>
  );
}
